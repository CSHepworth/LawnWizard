#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace lawn_wizard_platform.Models
{
    public class EmployeesJobs
    {
        [Key]
        public int EmployeeJobId { get; set; }

        public int EmployeeId { get; set; }

        public int JobTitleId { get; set; }

        public Employee? Employee { get; set; }

        public JobTitle? JobTitle { get; set; }
    }
}
