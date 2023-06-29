#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace lawn_wizard_platform.Models
{
    public class JobTitle
    {
        [Key]
        public int jobTitleId { get; set; }

        [Display( Name = "Title" )]
        [Required( ErrorMessage = "is required" )]
        public string title { get; set; }

        public List<Employee> employees { get; set; } = new List<Employee>();

        public DateTime createdAt { get; set; } = DateTime.Now;
        public DateTime updatedAt { get; set;} = DateTime.Now;

    }
}
