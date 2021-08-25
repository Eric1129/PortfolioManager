import { Component, Input } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private apiService: ApiService) { 
    this.apiService.getNetWorth()
      .subscribe( (data:any)=>{
        this.netvalue = data
      } )
  }
  title = 'PortfolioManager';
  today = new Date();
  netvalue = 0;
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

  @Input() account_number:number = 0;
  @Input() value:number = 0;
  @Input() account_type:string = "";

  onChange($event:any){
    this.account_number = $event.target.options[$event.target.options.selectedIndex].text;
  }

  makeServiceCall(){
    // we call the service method by subscribing to it
    // remember the api call will be async so subscribing responds when it returns
    // this.typicodeService.getApiData({category:this.category, id:this.id})
    this.apiService.getNetWorth()
      .subscribe( (data:any)=>{
        this.netvalue = data
      } )
  }
  
}
