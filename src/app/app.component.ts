import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortfolioManager';
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
}
