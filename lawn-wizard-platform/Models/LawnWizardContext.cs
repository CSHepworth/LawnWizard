using Microsoft.EntityFrameworkCore;

namespace lawn_wizard_platform.Models
{
    public class LawnWizardContext : DbContext
    {
        public LawnWizardContext( DbContextOptions options ) : base( options ) { }

        public DbSet<Employee> Employees { get; set; }

        public DbSet<JobTitle> JobTitles { get; set; }

        public DbSet<EmployeesJobs> EmployeesJobs { get; set; }
    }
}
