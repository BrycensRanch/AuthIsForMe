using me.authisfor.AuthBackend.Api.Infrastructure.Filters;
using me.authisfor.AuthBackend.Api.IntegrationTests.Infrastructure.DataFeeders;
using me.authisfor.AuthBackend.Core;
using me.authisfor.AuthBackend.Core.Registrations;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.FeatureManagement;

namespace me.authisfor.AuthBackend.Api.IntegrationTests.Infrastructure
{
    internal class TestStartup : Startup
    {
        public TestStartup(IConfiguration configuration)
            : base(configuration)
        {

        }

        public override void ConfigureServices(IServiceCollection services)
        {
            services
                .AddHttpContextAccessor()
                .AddMvcCore(options =>
                {
                    options.Filters.Add<ValidateModelStateFilter>();
                })
                .AddDataAnnotations();

            services.AddCoreComponents();
            // services.AddTransient<ISomeService, SomeService>();  //if needed override registration with own test fakes

            services.AddFeatureManagement();

            services.AddDbContext<EmployeesContext>(options =>
            {
                options.UseInMemoryDatabase("employees");
            });
            services.AddDbContext<CarsContext>(options =>
            {
                options.UseInMemoryDatabase("cars");
            });
        }

        public override void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            var employeesContext = app.ApplicationServices.GetService<EmployeesContext>();
            EmployeesContextDataFeeder.Feed(employeesContext);

            var carsContext = app.ApplicationServices.GetService<CarsContext>();
            CarsContextDataFeeder.Feed(carsContext);

            app.UseRouting();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
