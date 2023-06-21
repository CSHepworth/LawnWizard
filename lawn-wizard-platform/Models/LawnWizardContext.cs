using Microsoft.EntityFrameworkCore;

namespace lawn_wizard_platform.Models
{
    public class LawnWizardContext : DbContext
    {
        public LawnWizardContext(DbContextOptions<LawnWizardContext> options)
            : base(options) 
        {
        }
    }
}
