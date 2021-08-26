import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-market-movers',
  templateUrl: './market-movers.component.html',
  styleUrls: ['./market-movers.component.css']
})
export class MarketMoversComponent implements OnInit {
  

  constructor(private apiService: ApiService) {
    this.retriveSAP500()
    this.retriveDWJ()
    this.retriveNSDQ()
  }
  SAP = 0.0;
  DWJ = 0.0;
  NASDAQ = 0.0;
  ngOnInit(): void {
    setInterval(() => {
      this.retriveSAP500();
      this.retriveDWJ()
      this.retriveNSDQ()
    }, 30000);
  }

  retriveSAP500(){
    this.apiService.getSAP500()
      .subscribe( (data:any)=>{
        this.SAP = data
      } )
  }

  retriveDWJ(){
    this.apiService.getDWJ()
      .subscribe( (data:any)=>{
        this.DWJ = data
      } )
  }

  retriveNSDQ(){
    this.apiService.getNSDQ()
      .subscribe( (data:any)=>{
        this.NASDAQ = data
      } )
  }

}
