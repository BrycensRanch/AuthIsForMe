using me.authisfor.AuthBackend.Core.Repositories;
using me.authisfor.AuthBackend.Core.Services;

using Microsoft.Extensions.DependencyInjection;

namespace me.authisfor.AuthBackend.Core.Registrations
{
    public static class CoreRegistrations
    {
        public static IServiceCollection AddCoreComponents(this IServiceCollection services)
        {
            services.AddTransient<IEmployeeRepository, EmployeeRepository>();
            services.AddScoped<ICarService, CarService>();

            return services;
        }
    }
}