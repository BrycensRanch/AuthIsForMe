using System.Globalization;
using System.Threading.RateLimiting;
using me.authisfor.AuthBackend.Api.Infrastructure.Configurations;
using me.authisfor.AuthBackend.Api.Infrastructure.Registrations;
using me.authisfor.AuthBackend.Core;
using me.authisfor.AuthBackend.Core.Registrations;
using me.authisfor.AuthBackend.Core.Settings;
using HealthChecks.UI.Client;
using me.authisfor.AuthBackend.Api.BackgroundServices;
using me.authisfor.AuthBackend.Api.Infrastructure.Filters;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics.HealthChecks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.RateLimiting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Hosting;
using Microsoft.FeatureManagement;
using Microsoft.FeatureManagement.FeatureFilters;
using Sentry.AspNetCore;
using Sentry.Extensibility;
using Swashbuckle.AspNetCore.SwaggerUI;
using Microsoft.AspNetCore.DataProtection;
using StackExchange.Redis;


namespace me.authisfor.AuthBackend.Api
{
    public class Startup
    {
        private readonly IConfiguration _configuration;

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public virtual void ConfigureServices(IServiceCollection services)
        {
            services
                .AddHttpContextAccessor()
                .AddRouting(options => options.LowercaseUrls = true);
            services.AddMvcCore(options =>
                {
                    options.Filters.Add<HttpGlobalExceptionFilter>();
                    options.Filters.Add<ValidateModelStateFilter>();
                    options.Filters.Add<UserAgentFilter>();
                })
                .AddXmlSerializerFormatters()
                .AddApiExplorer()
                .AddDataAnnotations();
            services.AddRateLimiter(_ =>
            {
                _.OnRejected = (context, _) =>
                {
                    if (context.Lease.TryGetMetadata(MetadataName.RetryAfter, out var retryAfter))
                    {
                        context.HttpContext.Response.Headers.RetryAfter =
                            ((int) retryAfter.TotalSeconds).ToString(NumberFormatInfo.InvariantInfo);
                    }

                    context.HttpContext.Response.StatusCode = StatusCodes.Status429TooManyRequests;
                    context.HttpContext.Response.WriteAsync("Too many requests. Please try again later.");

                    return new ValueTask();
                };
                _.GlobalLimiter = PartitionedRateLimiter.CreateChained(
                    PartitionedRateLimiter.Create<HttpContext, string>(httpContext =>
                    {
                        var userAgent = httpContext.Request.Headers.UserAgent.ToString();

                        return RateLimitPartition.GetFixedWindowLimiter
                        (userAgent, _ =>
                            new FixedWindowRateLimiterOptions
                            {
                                AutoReplenishment = true,
                                PermitLimit = 4,
                                Window = TimeSpan.FromSeconds(2)
                            });
                    }),
                    PartitionedRateLimiter.Create<HttpContext, string>(httpContext =>
                    {
                        var userAgent = httpContext.Request.Headers.UserAgent.ToString();

                        return RateLimitPartition.GetFixedWindowLimiter
                        (userAgent, _ =>
                            new FixedWindowRateLimiterOptions
                            {
                                AutoReplenishment = true,
                                PermitLimit = 20,
                                Window = TimeSpan.FromSeconds(30)
                            });
                    }));
            });
            //there is a difference between AddDbContext() and AddDbContextPool(), more info https://docs.microsoft.com/en-us/ef/core/what-is-new/ef-core-2.0#dbcontext-pooling and https://stackoverflow.com/questions/48443567/adddbcontext-or-adddbcontextpool
            services.AddDbContextPool<EmployeesContext>(options => options.UseNpgsql(_configuration.GetConnectionString("PostgresDb")));
            services.AddDbContextPool<CarsContext>(options => options.UseNpgsql(_configuration.GetConnectionString("PostgresDb")));

            services.Configure<ApiKeySettings>(_configuration.GetSection("ApiKey"));
            services.AddSwagger(_configuration);

            services.Configure<PingWebsiteSettings>(_configuration.GetSection("PingWebsite"));
            services.AddHostedService<PingWebsiteBackgroundService>();
            services.AddHttpClient(nameof(PingWebsiteBackgroundService));

            services.AddCoreComponents();
            services.AddAntiforgery();
            services.AddCors();

            services.AddIPFiltering(_configuration.GetSection("IPFiltering"));

            services.AddFeatureManagement()
                .AddFeatureFilter<TimeWindowFilter>();

            services.AddHealthChecks()
                .AddNpgSql(_configuration.GetConnectionString("PostgresDb"));
        }
        static string GetTicks() => (DateTime.Now.Ticks & 0x11111).ToString("00000");
        string defaultPolicy = "fixed";

        public virtual void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseRouting();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapGet("/", () => Results.Ok($"Sliding Window Limiter {GetTicks()}"))
                    .RequireRateLimiting(defaultPolicy);

                endpoints.MapControllers().WithMetadata();
                endpoints.MapDefaultControllerRoute().RequireRateLimiting(defaultPolicy);


                endpoints.MapHealthChecks("/health", new HealthCheckOptions
                {
                    ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse,
                });
            });
            app.UseRateLimiter();
            app.UseResponseCaching();

            app.UseIPFiltering();
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Simple Api V1");
                c.DocExpansion(DocExpansion.None);
            });

        }
    }
}
