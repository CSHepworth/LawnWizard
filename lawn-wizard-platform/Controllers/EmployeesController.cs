using lawn_wizard_platform.BLL.Interfaces;
using lawn_wizard_platform.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace lawn_wizard_platform.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class EmployeesController : Controller
    {
        private readonly IEmployeeBLL _employeeBLL;

        private LawnWizardContext _db;

        public EmployeesController(IEmployeeBLL employeeBLL, LawnWizardContext context)
        {
            _employeeBLL = employeeBLL;
            _db = context;
        }

        [HttpGet()]
        public IActionResult GetAllEmployees() 
        {
            string allEmployees = _employeeBLL.GetAllEmployees();
            return allEmployees == null ? NotFound() : Ok(allEmployees);
        }

        [HttpGet()]
        public IActionResult GetEmployeeByName(string FirstName)
        {
            Employee? employee = _db.Employees.FirstOrDefault(f => f.FirstName == FirstName);
            return employee == null ? NotFound() : Ok(employee);
        }


        [HttpPost()]
        public IActionResult RegisterEmployee(Employee newEmployee)
        {
            if (ModelState.IsValid)
            {
                if (_db.Employees.Any(e => e.EmployeeEmail == newEmployee.EmployeeEmail))
                {
                    ModelState.AddModelError("Employee Email", "Email is already taken");
                    return BadRequest(ModelState);
                }

                PasswordHasher<Employee> Hasher = new PasswordHasher<Employee>();
                newEmployee.Password = Hasher.HashPassword(newEmployee, newEmployee.Password);

                _db.Employees.Add(newEmployee);
                _db.SaveChanges();

                return Ok();
            }

            return BadRequest();
        }

    }
}
