import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ManageaccountsComponent } from './ManageAccounts/manageaccounts.component';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { MarketMoverComponent } from './market-mover/market-mover.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageaccountsComponent,
    CashFlowComponent,
    MarketMoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
