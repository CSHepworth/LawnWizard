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

        [HttpGet("{FirstName}")]
        public IActionResult GetEmployeeByName(string FirstName)
        {
            Employee? employee = db.Employees.FirstOrDefault(f => f.FirstName == FirstName);
            return employee == null ? NotFound() : Ok(employee);
        }

        [HttpPost("RegisterEmployee")]
        public IActionResult RegisterEmployee(Employee newEmployee) 
        {
            if (ModelState.IsValid)
            {
                if (db.Employees.Any(e => e.EmployeeEmail == newEmployee.EmployeeEmail))
                {
                    ModelState.AddModelError("Employee Email", "Email is already taken");
                    return BadRequest();
                }

                PasswordHasher<Employee> Hasher = new PasswordHasher<Employee>();
                newEmployee.Password = Hasher.HashPassword( newEmployee, newEmployee.Password );

                db.Employees.Add(newEmployee);
                db.SaveChanges();

                return Ok();
            }

            return BadRequest();
        }
    }
}
