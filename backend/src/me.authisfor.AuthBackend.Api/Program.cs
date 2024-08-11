using System.Reflection;
using System.Threading.RateLimiting;
using me.authisfor.AuthBackend.Api;
using me.authisfor.AuthBackend.Api.Infrastructure.Configurations;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.RateLimiting;
using Microsoft.Extensions.Hosting;
using Serilog;


Log.Logger = SerilogConfigurator.CreateLogger();

try
{
    String version = Assembly.GetEntryAssembly().GetCustomAttribute<AssemblyInformationalVersionAttribute>().InformationalVersion;


    Log.Logger.Information("Starting up");
    Log.Logger.Information("Version: " + version);
    using var webHost = CreateWebHostBuilder(args).Build();
    await webHost.RunAsync();
}
catch (Exception ex)
{
    Log.Logger.Fatal(ex, "Application start-up failed");
    throw;
}
finally
{
    Log.CloseAndFlush();
}
static IHostBuilder CreateWebHostBuilder(string[] args) =>
    Host.CreateDefaultBuilder(args)
        .UseSerilog()
        .ConfigureWebHostDefaults(webBuilder =>
        {
            webBuilder.UseSentry();
            webBuilder.ConfigureKestrel(serverOptions =>
            {
                serverOptions.AddServerHeader = false;
            });
            webBuilder.UseStartup<Startup>();
        });
