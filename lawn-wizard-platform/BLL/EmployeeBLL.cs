using lawn_wizard_platform.BLL.Interfaces;
using lawn_wizard_platform.Models;
using Newtonsoft.Json;

namespace lawn_wizard_platform.BLL
{
    public class EmployeeBLL : IEmployeeBLL
    {
        private LawnWizardContext db;

        public EmployeeBLL(LawnWizardContext context)
        {
            db = context;
        }

        public string GetAllEmployees()
        {
            List<Employee> allEmployees = db.Employees.ToList();
            return JsonConvert.SerializeObject(allEmployees);
        }
    }
}
