#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace lawn_wizard_platform.Models
{
    public class EmployeesJobs
    {
        [Key]
        public int employeeJobId { get; set; }

        public int employeeId { get; set; }

        public int jobTitleId { get; set; }

        public Employee? employee { get; set; }

        public JobTitle? jobTitle { get; set; }
    }
}
