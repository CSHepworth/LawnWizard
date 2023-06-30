#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace lawn_wizard_platform.Models
{
    public class JobTitle
    {
        [Key]
        public int JobTitleId { get; set; }

        [Display( Name = "Title" )]
        [Required( ErrorMessage = "is required" )]
        public string Title { get; set; }

        public List<Employee> Employees { get; set; } = new List<Employee>();

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set;} = DateTime.Now;

    }
}
