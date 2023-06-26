#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace lawn_wizard_platform.Models
{
    public class Employee
    {
        [Key]
        public int EmployeeId { get; set; }

        [EmailAddress]
        [Display(Name = "Employee Email")]
        [Required(ErrorMessage = "is required")]
        [MaxLength(62, ErrorMessage = "must be 62 characters or less")]
        public string EmployeeEmail { get; set; }

        [Display( Name = "Password" )]
        [DataType(DataType.Password)]
        [Required( ErrorMessage = "is required" )]
        [MinLength( 8, ErrorMessage = "must be at least 8 characters" )]
        [MaxLength( 99, ErrorMessage = "must be less than 100 characters" )]
        public string Password { get; set; }

        [NotMapped]
        [Display( Name = "Confirm Password" )]
        [DataType(DataType.Password)]
        [Compare( "Password", ErrorMessage = "passwords do not match" )]
        public string ConfirmPassword { get; set; }

        [Display( Name = "First Name" )]
        [Required( ErrorMessage = "is required" )]
        [MaxLength( 49, ErrorMessage = "must be less than 50 characters" )]
        public string FirstName { get; set; }

        [Display( Name = "Last Name" )]
        [Required ( ErrorMessage = "is required" )]
        [MaxLength( 49, ErrorMessage = "must be less than 50 characters" )]
        public string LastName { get; set; }

        [Display( Name = "Hire Date" )]
        [Required( ErrorMessage = "is required" )]
        public DateTime HireDate { get; set; }

        [Display(Name = "Admin Status")]
        public bool AdminStatus { get; set; } = false;

        [Display( Name = "Manager Status" )]
        public bool ManagerStatus { get; set; } = false;

        public int JobTitleId { get; set; }
        public JobTitle? JobTitle { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public DateTime UpdatedAt { get; set; } = DateTime.Now;

    }
}
