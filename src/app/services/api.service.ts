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
  getTotalCashValue(){
    return this.http.get("http://localhost:8000/portfolio/cashvalue");
  }
  getTotalInvestmentValue(){
    return this.http.get("http://localhost:8000/portfolio/investmentvalue");
  }

  getCashAccountValue(params={account_number: 0}){
    return this.http.get(`http://localhost:8000/portfolio/cash_accounts/value/${params.account_number}`)
  }

  createNewAccount(params={account_number: 0, account_type: ''}){
    return this.http.post("http://localhost:8000/portfolio/addAccount", {accountNumber: params.account_number, accountType: params.account_type});
  }

  deleteAccount(params={account_number: 0}){
    return this.http.delete(`http://localhost:8000/portfolio/${params.account_number}`)
  }
  getSAP500(){
    return this.http.get("http://localhost:8000/portfolio/marketindices/SAP500");
  }
  getDWJ(){
    return this.http.get("http://localhost:8000/portfolio/marketindices/DWJ");
  }
  getNSDQ(){
    return this.http.get("http://localhost:8000/portfolio/marketindices/NSDQ");
  }
}
