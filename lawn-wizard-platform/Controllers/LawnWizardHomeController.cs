using lawn_wizard_platform.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace lawn_wizard_platform.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LawnWizardHomeController : ControllerBase
    {
        private LawnWizardContext db;

        public LawnWizardHomeController(LawnWizardContext context)
        {
            db = context;
        }

        
    }
}
