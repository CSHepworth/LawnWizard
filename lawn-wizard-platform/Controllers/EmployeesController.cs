using lawn_wizard_platform.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace lawn_wizard_platform.Controllers
{
    [Route("Employees")]
    [ApiController]
    public class EmployeesController : Controller
    {
        private LawnWizardContext db;

        public EmployeesController(LawnWizardContext context)
        {
            db = context;
        }

        [HttpGet("GetAllEmployees")]
        public IActionResult GetAllEmployees() 
        {
            List<Employee> allEmployees = db.Employees
                .Include(j => j.JobTitle)
                .ToList();
            return allEmployees == null ? NotFound() : Ok(allEmployees);
        }

        [HttpGet("GetEmployeeByName")]
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
                    return BadRequest(ModelState);
                }

                PasswordHasher<Employee> Hasher = new PasswordHasher<Employee>();
                newEmployee.Password = Hasher.HashPassword(newEmployee, newEmployee.Password);

                db.Employees.Add(newEmployee);
                db.SaveChanges();

                return Ok();
            }

            return BadRequest();
        }

    }
}
