namespace me.authisfor.AuthBackend.Api.Infrastructure.Filters;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

public class UserAgentFilter : ActionFilterAttribute
{
    public override void OnActionExecuting(ActionExecutingContext context)
    {
        if (!context.HttpContext.Request.Headers.TryGetValue("User-Agent", out var userAgent))
        {
            context.Result = new BadRequestObjectResult("Missing User-Agent header.");
            return;
        }

        base.OnActionExecuting(context);
    }
}
