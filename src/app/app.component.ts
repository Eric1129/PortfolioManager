import { Component, Input } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private apiService: ApiService) { 
      this.retriveNetWorth()
      this.retriveTotalInvestmentValue()
      this.retriveTotalCashValue()
  }
  title = 'PortfolioManager';
  today = Date.now();

  @Input() netvalue = 0;
  @Input() totalcashvalue = 0;
  @Input() totalinvestmentvalue = 0;

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

  ngOnInit(): void {
    setInterval(() => {
      this.today = Date.now();
      console.log(this.today);
    }, 1000);
  }

}
