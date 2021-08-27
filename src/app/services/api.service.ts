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
  getSAP500Change(){
    return this.http.get("http://localhost:8000/portfolio/marketindices/SAP500/change");
  }
  getDWJ(){
    return this.http.get("http://localhost:8000/portfolio/marketindices/DWJ");
  }
  getDWJChange(){
    return this.http.get("http://localhost:8000/portfolio/marketindices/DWJ/change");
  }
  getNSDQ(){
    return this.http.get("http://localhost:8000/portfolio/marketindices/NSDQ");
  }
  getNSDQChange(){
    return this.http.get("http://localhost:8000/portfolio/marketindices/NSDQ/change");
  }

  purchaseInvestment(params={account_number: 0, cash_account_number: 0, ticker: '', amount: 0}){
    return this.http.post(`http://localhost:8000/investment/buy/`, 
    {accountNumber: params.account_number, cashAccountNumber: params.cash_account_number, ticker: params.ticker, amount: params.amount})
  }

  sellInvestment(params={account_number: 0, cash_account_number: 0, ticker: '', amount: 0}){
    return this.http.post(`http://localhost:8000/investment/sell/`, 
    {accountNumber: params.account_number, cashAccountNumber: params.cash_account_number, ticker: params.ticker, amount: params.amount})
  }

  depositCash(params={account_number:0, amount:0}){
    return this.http.put(`http://localhost:8000/portfolio/deposit/${params.account_number}/${params.amount}`, {})
  }

  withdrawCash(params={account_number:0, amount:0}){
    return this.http.put(`http://localhost:8000/portfolio/withdraw/${params.account_number}/${params.amount}`, {})
  }

  getInvestmentList(params={account_number:0}){
    return this.http.get(`http://localhost:8000/investment/investments/${params.account_number}`)
  }
}
