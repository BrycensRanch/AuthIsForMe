using System;
using me.authisfor.AuthBackend.Core;
using me.authisfor.AuthBackend.Core.Models;

namespace me.authisfor.AuthBackend.Api.IntegrationTests.Infrastructure.DataFeeders
{
    internal static class EmployeesContextDataFeeder
    {
        public static void Feed(EmployeesContext dbContext)
        {
            var dept1 = new Department
            {
                DeptNo = "D1",
                DeptName = "Test department",
            };
            dbContext.Departments.Add(dept1);

            dbContext.Employees.Add(new Employee
            {
                EmpNo = 1,
                FirstName = "Thomas",
                LastName = "Anderson",
                BirthDate = new DateTime(1962, 03, 11),
                Gender = "M",
                Department = dept1,
            });

            dbContext.Employees.Add(new Employee
            {
                EmpNo = 2,
                FirstName = "Jonathan",
                LastName = "Fountain",
                BirthDate = new DateTime(1954, 07, 19),
                Gender = "M",
                Department = dept1,
            });

            dbContext.Employees.Add(new Employee
            {
                EmpNo = 99,
                FirstName = "Person",
                LastName = "ToDelete",
                BirthDate = new DateTime(2019, 10, 13),
                Gender = "M",
                Department = dept1,
            });

            dbContext.SaveChanges();
        }
    }
}
