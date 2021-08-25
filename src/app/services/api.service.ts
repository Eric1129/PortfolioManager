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

  getInvestmentAccountValue(params={account_number: 0}){
    return this.http.get(`http://localhost:8000/investment/value/${params.account_number}`)
  }
  
  getNetWorth(){
    return this.http.get("http://localhost:8000/portfolio/networth");
  }

  getCashAccountValue(params={account_number: 0}){
    return this.http.get(`http://localhost:8000/portfolio/cash_accounts/value/${params.account_number}`)
  }
}
