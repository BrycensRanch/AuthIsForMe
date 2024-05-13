using me.authisfor.AuthBackend.Core.Dtos;
using me.authisfor.AuthBackend.Core.Models;

namespace me.authisfor.AuthBackend.Core.Extensions
{
    internal static class EmployeeExtensions
    {
        public static EmployeeDto MapToDto(this Employee source)
        {
            return new EmployeeDto
            {
                Id = source.EmpNo,
                FirstName = source.FirstName,
                LastName = source.LastName,
                BirthDate = source.BirthDate,
                Gender = source.Gender,
            };
        }
    }
}
