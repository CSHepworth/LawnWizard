import { createAction, props } from "@ngrx/store";

export const getEmployees = createAction( '[Get Employees] GetEmployees' )

export const getEmployeeByEmail = createAction( '[Get Employee by Email] GetEmployeeByEmail', props<{ email: string }> )

export const registerEmployee = createAction( '[Register Employee] RegisterEmployee', props<{ email: string, password: string, confirmPassword: string, firstName: string, lastName: string }> )

