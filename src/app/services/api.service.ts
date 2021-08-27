import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getAllInvestmentAccounts(){
    return this.http.get("http://portfoliodemo-8-27-portfoliodemo-8-27.namdevops26.conygre.com/portfolio/investment_accounts");
  }

  getAllCashAccounts(){
    return this.http.get("http://portfoliodemo-8-27-portfoliodemo-8-27.namdevops26.conygre.com/portfolio/cash_accounts");
  }

  getInvestmentAccountValue(params={account_number: 0}){
    return this.http.get(`http://portfoliodemo-8-27-portfoliodemo-8-27.namdevops26.conygre.com/investment/value/${params.account_number}`)
  }
  
  getNetWorth(){
    return this.http.get("http://portfoliodemo-8-27-portfoliodemo-8-27.namdevops26.conygre.com/portfolio/networth");
  }
  getTotalCashValue(){
    return this.http.get("http://portfoliodemo-8-27-portfoliodemo-8-27.namdevops26.conygre.com/portfolio/cashvalue");
  }
  getTotalInvestmentValue(){
    return this.http.get("http://portfoliodemo-8-27-portfoliodemo-8-27.namdevops26.conygre.com/portfolio/investmentvalue");
  }

  getCashAccountValue(params={account_number: 0}){
    return this.http.get(`http://portfoliodemo-8-27-portfoliodemo-8-27.namdevops26.conygre.com/portfolio/cash_accounts/value/${params.account_number}`)
  }

  createNewAccount(params={account_number: 0, account_type: ''}){
    return this.http.post("http://portfoliodemo-8-27-portfoliodemo-8-27.namdevops26.conygre.com/portfolio/addAccount", {accountNumber: params.account_number, accountType: params.account_type});
  }

  deleteAccount(params={account_number: 0}){
    return this.http.delete(`http://portfoliodemo-8-27-portfoliodemo-8-27.namdevops26.conygre.com/portfolio/${params.account_number}`)
  }
  getSAP500(){
    return this.http.get("http://portfoliodemo-8-27-portfoliodemo-8-27.namdevops26.conygre.com/portfolio/marketindices/SAP500");
  }
  getSAP500Change(){
    return this.http.get("http://portfoliodemo-8-27-portfoliodemo-8-27.namdevops26.conygre.com/portfolio/marketindices/SAP500/change");
  }
  getDWJ(){
    return this.http.get("http://portfoliodemo-8-27-portfoliodemo-8-27.namdevops26.conygre.com/portfolio/marketindices/DWJ");
  }
  getDWJChange(){
    return this.http.get("http://portfoliodemo-8-27-portfoliodemo-8-27.namdevops26.conygre.com/portfolio/marketindices/DWJ/change");
  }
  getNSDQ(){
    return this.http.get("http://portfoliodemo-8-27-portfoliodemo-8-27.namdevops26.conygre.com/portfolio/marketindices/NSDQ");
  }
  getNSDQChange(){
    return this.http.get("http://portfoliodemo-8-27-portfoliodemo-8-27.namdevops26.conygre.com/portfolio/marketindices/NSDQ/change");
  }

  purchaseInvestment(params={account_number: 0, cash_account_number: 0, ticker: '', amount: 0}){
    return this.http.post(`http://portfoliodemo-8-27-portfoliodemo-8-27.namdevops26.conygre.com/investment/buy/`, 
    {accountNumber: params.account_number, cashAccountNumber: params.cash_account_number, ticker: params.ticker, amount: params.amount})
  }

  sellInvestment(params={account_number: 0, cash_account_number: 0, ticker: '', amount: 0}){
    return this.http.post(`http://portfoliodemo-8-27-portfoliodemo-8-27.namdevops26.conygre.com/investment/sell/`, 
    {accountNumber: params.account_number, cashAccountNumber: params.cash_account_number, ticker: params.ticker, amount: params.amount})
  }

  depositCash(params={account_number:0, amount:0}){
    return this.http.post(`http://portfoliodemo-8-27-portfoliodemo-8-27.namdevops26.conygre.com/portfolio/cash_accounts/deposit/${params.account_number}/${params.amount}`, {})
  }

  withdrawCash(params={account_number:0, amount:0}){
    return this.http.post(`http://portfoliodemo-8-27-portfoliodemo-8-27.namdevops26.conygre.com/portfolio/cash_accounts/withdraw/${params.account_number}/${params.amount}`, {})
  }

  getInvestmentList(params={account_number:0}){
    return this.http.get(`http://portfoliodemo-8-27-portfoliodemo-8-27.namdevops26.conygre.com/investment/investments/${params.account_number}`)
  }
}
