import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({ providedIn: 'root' })
export class EmployeeService {

  private EmployeesUrl = 'https://localhost:7272/Employees';

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
    return this.http.get<Employee[]>(this.EmployeesUrl + '/GetAllEmployees');
  }
}
