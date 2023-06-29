using Microsoft.EntityFrameworkCore;

namespace lawn_wizard_platform.Models
{
    public class LawnWizardContext : DbContext
    {
        public LawnWizardContext( DbContextOptions options ) : base( options ) { }

        public DbSet<Employee> employees { get; set; }

        public DbSet<JobTitle> jobTitles { get; set; }

        public DbSet<EmployeesJobs> employeesJobs { get; set; }
    }
}
