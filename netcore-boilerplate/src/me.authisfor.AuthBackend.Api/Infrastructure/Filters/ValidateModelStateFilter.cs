using System.Linq;
using FluentValidation;
using FluentValidation.Results;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Reflection;

namespace me.authisfor.AuthBackend.Api.Infrastructure.Filters
{
    public class ValidateModelStateFilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            var validator = context.ActionDescriptor.GetCustomAttributes<IValidator>(true).FirstOrDefault();
            if (validator == null)
            {
                return;
            }

            var validationResult = validator.Validate(context.ActionArguments.Values.FirstOrDefault());

            if (validationResult.IsValid)
            {
                return;
            }

            context.Result = new BadRequestObjectResult(new ErrorResponse
            {
                Issues = validationResult.Errors.Select(e => e.ErrorMessage).ToArray()
            });
        }
    }
}
