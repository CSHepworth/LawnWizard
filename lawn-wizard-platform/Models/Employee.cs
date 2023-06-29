#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace lawn_wizard_platform.Models
{
    public class Employee
    {
        [Key]
        public int employeeId { get; set; }

        [EmailAddress]
        [Display(Name = "Employee Email")]
        [Required(ErrorMessage = "is required")]
        [MaxLength(62, ErrorMessage = "must be 62 characters or less")]
        public string employeeEmail { get; set; }

        [Display( Name = "Password" )]
        [DataType(DataType.Password)]
        [Required( ErrorMessage = "is required" )]
        [MinLength( 8, ErrorMessage = "must be at least 8 characters" )]
        [MaxLength( 99, ErrorMessage = "must be less than 100 characters" )]
        public string password { get; set; }

        [NotMapped]
        [Display( Name = "Confirm Password" )]
        [DataType(DataType.Password)]
        [Compare( "Password", ErrorMessage = "passwords do not match" )]
        public string confirmPassword { get; set; }

        [Display( Name = "First Name" )]
        [Required( ErrorMessage = "is required" )]
        [MaxLength( 49, ErrorMessage = "must be less than 50 characters" )]
        public string firstName { get; set; }

        [Display( Name = "Last Name" )]
        [Required ( ErrorMessage = "is required" )]
        [MaxLength( 49, ErrorMessage = "must be less than 50 characters" )]
        public string lastName { get; set; }

        [Display( Name = "Hire Date" )]
        [Required( ErrorMessage = "is required" )]
        public DateTime hireDate { get; set; } = DateTime.Now;

        [Display(Name = "Admin Status")]
        public bool adminStatus { get; set; } = false;

        [Display( Name = "Manager Status" )]
        public bool managerStatus { get; set; } = false;

        public int jobTitleId { get; set; }
        public JobTitle? jobTitle { get; set; }

        public DateTime createdAt { get; set; } = DateTime.Now;

        public DateTime updatedAt { get; set; } = DateTime.Now;

    }
}
