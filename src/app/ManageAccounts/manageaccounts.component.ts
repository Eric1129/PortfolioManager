import { ThrowStmt } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit, TRANSLATIONS } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './manageaccounts.component.html',
  styleUrls: ['./manageaccounts.component.css']
})
export class ManageaccountsComponent implements OnInit {

  constructor(private apiService: ApiService) { 
    this.apiService.getAllCashAccounts()
    .subscribe( (data: any) => {
      this.cashAccounts = data
    } )

    this.apiService.getAllInvestmentAccounts()
    .subscribe( (data: any) => {
      this.investmentAccounts = data
    } )
  }
  

  // @Input() account_number:number = 0;
  // @Input() account_value:number = 0;
  // @Input() account_type:string = "";

  cash_account_obj = {account_number: 0, account_value: 0}

  investment_account_obj = {account_number: 0, account_value: 0, investments: {ticker: '', buy_price: 0, current_price: 0}}

  
  account_number_display = 0;
  new_account_type = '';
  new_account_number = 0;
  new_account_number_display = 0;
  new_account_type_display = '';

  cash_account_number_display = 0;

  cash_account_value_display = 0;

  investment_account_number = 0;

  investment_account_value = 0;

  delete_account_number = 0;

  showNewAccountData = false;

  showDeleteAccountMessage = false;
  
  warnAccountDelete = false;

  showCashAccountData = false;

  showInvestmentAccountData = false;

  showInvestmentsInAccount = false;

  cashAccounts = [
    {accountNumber: 45234242},
    {accountNumber: 44444563},
    {accountNumber: 53893589},
    {accountNumber: 54743353}

   ];
   
  investmentAccounts = [
    {accountNumber: 53235255},
    {accountNumber: 45246654},
    {accountNumber: 43262362},
    {accountNumber: 14365425}
  ];

  investmentList = [
    {ticker: "TSLA", amount: 0, current_price: 0}
  ]

  investment_purchase_cash_account = 0

  investment_purchase_ticker = ''

  investment_purchase_amount = 0

  investment_sale_cash_account = 0;

  investment_sale_ticker = ''

  investment_sale_amount = 0

  cash_withdrawal_amount = 0

  cash_deposit_amount = 0

  investments_list = 'select a ticker';
  
  investments_data = {ticker: "TSLA", amount: 0, current_price: 0};

  ngOnInit(): void {
  }

  resetVariables(){
    this.showInvestmentAccountData = false;
    this.showCashAccountData = false;
    this.showDeleteAccountMessage = false;
    this.warnAccountDelete = false;
    this.showNewAccountData = false;
    this.showInvestmentsInAccount = false;
  }
  retrieveBasicInvestmentData(){
    this.resetVariables();
    this.apiService.getInvestmentAccountValue({account_number: this.investment_account_obj.account_number})
    .subscribe( (data:any) => {
      this.investment_account_obj.account_value = data
      this.account_number_display = this.investment_account_obj.account_number
      this.showInvestmentAccountData = true;
    })
    this.apiService.getInvestmentList({account_number: this.investment_account_obj.account_number})
    .subscribe( (data:any) => {
      this.investmentList = data
    })
  }

  retrieveBasicCashData(){
    this.resetVariables();
    this.apiService.getCashAccountValue({account_number: this.cash_account_obj.account_number})
    .subscribe( (data:any) => {
      this.cash_account_obj.account_value = data
      this.cash_account_number_display = this.cash_account_obj.account_number;
      this.cash_account_value_display = this.cash_account_obj.account_value;
      this.account_number_display = this.cash_account_obj.account_number;
      this.showCashAccountData = true;
    })
  }

  createNewAccount(){
    //need to write a new API call to create the account based on the new_account data
    this.resetVariables();
    this.apiService.createNewAccount({account_number: this.new_account_number, account_type: this.new_account_type})
    .subscribe( (data:any) =>{
      this.showNewAccountData = true;
      this.new_account_number_display = this.new_account_number
      this.new_account_type_display = this.new_account_type
    } )
  }

  deleteStart(){
    this.resetVariables();
    this.warnAccountDelete = true
  }

  deleteYes(){
    //call delete method
    this.resetVariables();
    this.apiService.deleteAccount({account_number: this.delete_account_number})
    .subscribe( (data:any) => {
      this.warnAccountDelete = false;
      this.showDeleteAccountMessage = true;
    })
  }

  deleteNo(){
    this.resetVariables();
  }

  purchaseInvestment(){
    this.apiService.purchaseInvestment({
      account_number: this.investment_account_obj.account_number, 
      cash_account_number: this.investment_purchase_cash_account,
      ticker: this.investment_purchase_ticker,
      amount: this.investment_purchase_amount})
      .subscribe( (data: any) => {
        // this.cash_account_obj.account_number = this.investment_purchase_cash_account
        // this.retrieveBasicCashData();
        this.retrieveBasicInvestmentData();
      })
  }

  sellInvestment(){
    this.apiService.sellInvestment({
      account_number: this.investment_account_obj.account_number, 
      cash_account_number: this.investment_sale_cash_account,
      ticker: this.investment_sale_ticker,
      amount: this.investment_sale_amount})
      .subscribe( (data: any) => {
        // this.cash_account_obj.account_number = this.investment_purchase_cash_account
        // this.retrieveBasicCashData();
        this.retrieveBasicInvestmentData();
      })    
  }

  depositCash(){
    this.apiService.depositCash({
      account_number: this.cash_account_obj.account_number,
      amount: this.cash_deposit_amount
      
    }).subscribe( (data:any) => {
      this.retrieveBasicCashData();
    })
    
  }

  withdrawCash(){
    this.apiService.withdrawCash({
      account_number: this.cash_account_obj.account_number,
      amount: this.cash_withdrawal_amount
    }).subscribe( (data:any) => {
      this.retrieveBasicCashData();
    })
  }

  showInvestmentData(){
    this.showInvestmentsInAccount = true;
    let i = 0;
    for(i = 0; i < this.investmentList.length; i++){
      if(this.investmentList[i].ticker === this.investments_list){
        this.investments_data = this.investmentList[i]
      }
    }
  }
}
