using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace lawn_wizard_platform.Models;

public class LawnWizardContextFactory : IDesignTimeDbContextFactory<LawnWizardContext>
{
    public LawnWizardContext CreateDbContext(string[] args)
    {
        var optionsBuilder = new DbContextOptionsBuilder<LawnWizardContext>();

        var connectionString = "Server=localhost;port=3306;userid=cooper;password=root;database=lawnwizarddb;";

        optionsBuilder.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));

        return new LawnWizardContext(optionsBuilder.Options);
    }
}
