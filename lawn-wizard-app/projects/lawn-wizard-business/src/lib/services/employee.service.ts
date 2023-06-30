import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmployeeService {

  private EmployeesUrl = 'https://localhost:7272/Employees';

  $Employees: BehaviorSubject<Employee[]> = new BehaviorSubject<Employee[]>([]);

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    )
  };

  constructor( private http: HttpClient ) { }

  getEmployees() {
    return this.http.get(this.EmployeesUrl + '/GetAllEmployees')
      .subscribe( v => {
        if(v) this.$Employees.next(JSON.parse(JSON.stringify(v)));
      });
  }
}
