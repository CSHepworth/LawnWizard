import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  private PlatformAPI = 'https://localhost:7272/api/';

  httpOptions = {
    headers : new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor() { }
}
