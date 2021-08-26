import { Component, Input } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private apiService: ApiService) { 


      this.apiService.getAllCashAccounts()
      .subscribe( (data: any) => {
        this.cashAccounts = data
      } )
  
      this.apiService.getAllInvestmentAccounts()
      .subscribe( (data: any) => {
        this.investmentAccounts = data
      } )
      this.retriveNetWorth()
      this.retriveTotalInvestmentValue()
      this.retriveTotalCashValue()
  }
  title = 'PortfolioManager';
  today = new Date();
  
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

  @Input() netvalue = 0;
  @Input() totalcashvalue = 0;
  @Input() totalinvestmentvalue = 0;
  @Input() account_number:number = 0;
  @Input() account_value:number = 0;
  @Input() account_type:string = "";

  onChange($event:any){
    this.account_number = $event.target.options[$event.target.options.selectedIndex].text;
  }

  retriveNetWorth(){
    // we call the service method by subscribing to it
    // remember the api call will be async so subscribing responds when it returns
    // this.typicodeService.getApiData({category:this.category, id:this.id})
    this.apiService.getNetWorth()
      .subscribe( (data:any)=>{
        this.netvalue = data
      } )
  }

  retriveTotalCashValue(){
    // we call the service method by subscribing to it
    // remember the api call will be async so subscribing responds when it returns
    // this.typicodeService.getApiData({category:this.category, id:this.id})
    this.apiService.getTotalCashValue()
      .subscribe( (data:any)=>{
        this.totalcashvalue = data
      } )
  }

  retriveTotalInvestmentValue(){
    // we call the service method by subscribing to it
    // remember the api call will be async so subscribing responds when it returns
    // this.typicodeService.getApiData({category:this.category, id:this.id})
    this.apiService.getTotalInvestmentValue()
      .subscribe( (data:any)=>{
        this.totalinvestmentvalue = data
      } )
  }

  
  retrieveBasicInvestmentData(){
    this.account_type = "investment"
    this.apiService.getInvestmentAccountValue({account_number: this.account_number})
    .subscribe( (data:any) => {
      this.account_value = data
    })
  }

  retrieveBasicCashData(){
    this.account_type = "cash"
    this.apiService.getCashAccountValue({account_number: this.account_number})
    .subscribe( (data:any) => {
      this.account_value = data
    })
  }
}
