import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getAllInvestmentAccounts(){
    return this.http.get("http://localhost:8000/portfolio/investment_accounts");
  }

  getAllCashAccounts(){
    return this.http.get("http://localhost:8000/portfolio/cash_accounts");
  }
}
