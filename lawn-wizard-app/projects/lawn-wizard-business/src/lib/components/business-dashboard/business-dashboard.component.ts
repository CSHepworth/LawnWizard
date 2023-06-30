import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lib-business-dashboard',
  templateUrl: './business-dashboard.component.html',
  styleUrls: ['./business-dashboard.component.scss']
})
export class BusinessDashboardComponent implements OnInit, OnDestroy {

  employees: Employee[] = [];
  employeesSub: Subscription;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployees();
    console.log(this.employees)
  }

  ngOnDestroy(): void {
    this.employeesSub.unsubscribe();
  }

  getAllEmployees(): void {
    this.employeeService.getEmployees();
    this.employeeService.$Employees.subscribe( v => {
      if (v) {
        this.employees = v;
      }
    });
  }

}
