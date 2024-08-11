namespace me.authisfor.AuthBackend.Api;

using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;

public class AllowHeaderMiddleware
{
    private readonly RequestDelegate _next;
    private readonly EndpointDataSource _endpointDataSource;

    public AllowHeaderMiddleware(RequestDelegate next, EndpointDataSource endpointDataSource)
    {
        _next = next;
        _endpointDataSource = endpointDataSource;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        var endpoint = context.GetEndpoint();

        if (endpoint != null)
        {
            var routePattern = (endpoint as RouteEndpoint)?.RoutePattern.RawText;
            if (!string.IsNullOrEmpty(routePattern))
            {
                var allowedMethods = _endpointDataSource
                    .Endpoints
                    .OfType<RouteEndpoint>()
                    .Where(e => e.RoutePattern.RawText == routePattern)
                    .SelectMany(e => e.Metadata.OfType<HttpMethodMetadata>())
                    .SelectMany(m => m.HttpMethods)
                    .Distinct()
                    .ToList();

                if (allowedMethods.Any())
                {
                    context.Response.Headers["Allow"] = string.Join(", ", allowedMethods);

                    if (!allowedMethods.Contains(context.Request.Method))
                    {
                        context.Response.StatusCode = StatusCodes.Status405MethodNotAllowed;
                        await context.Response.WriteAsync("Method Not Allowed");
                        return;
                    }
                }
            }
        }

        await _next(context);
    }
}
