import { Component, Input, OnInit } from '@angular/core';
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

  account_obj = {account_number: 0, account_value: 0, account_type:"cash"}

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

  ngOnInit(): void {
  }

  retrieveBasicInvestmentData(){
  
    this.account_obj.account_type = "investment"
    this.apiService.getInvestmentAccountValue({account_number: this.account_obj.account_number})
    .subscribe( (data:any) => {
      this.account_obj.account_value = data
    })
  }

  retrieveBasicCashData(){
    this.account_obj.account_type = "cash"
    this.apiService.getCashAccountValue({account_number: this.account_obj.account_number})
    .subscribe( (data:any) => {
      this.account_obj.account_value = data
    })
  }

}
