using Microsoft.Extensions.Configuration;
using Serilog;
using Serilog.Core;
using Serilog.Events;

namespace me.authisfor.AuthBackend.Api.Infrastructure.Configurations
{
    public static class SerilogConfigurator
    {
        public static Logger CreateLogger()
        {
            var configuration = LoadAppConfiguration();
            return new LoggerConfiguration()
                // .WriteTo.Sentry(o =>
                // {
                //     // Debug and higher are stored as breadcrumbs (default is Information)
                //     o.MinimumBreadcrumbLevel = LogEventLevel.Debug;
                //     // Warning and higher is sent as event (default is Error)
                //     o.MinimumEventLevel = LogEventLevel.Warning;
                // })
                .ReadFrom.Configuration(configuration)
                .CreateLogger();
        }

        private static IConfigurationRoot LoadAppConfiguration()
        {
            return new ConfigurationBuilder()
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production"}.json", optional: true)
                .Build();
        }
    }
}
