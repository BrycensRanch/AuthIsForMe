using System.ComponentModel.DataAnnotations;

namespace me.authisfor.AuthBackend.Core.Dtos
{
    public class EmployeePutDto
    {
        [Required]
        public string LastName { get; set; }
    }
}
