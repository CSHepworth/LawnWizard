import { Action, createReducer, on } from "@ngrx/store";
import * as EmployeeActions from '../actions/employee.actions';

export interface EmployeeState {
    Employees: [];
}

export const initialState: EmployeeState = {
    Employees: []
}

const employeeReducer = createReducer(
    initialState
)

