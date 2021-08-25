import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getAllInvestmentAccounts(){
    return this.http.get("http://localhost:8000/investment/all");
  }

  getAllCashAccounts(){
    return this.http.get("http://localhost:8000/investment/all");
  }
  
  getNetWorth(){
    return this.http.get("http://localhost:8000/portfolio/networth");
  }
}
