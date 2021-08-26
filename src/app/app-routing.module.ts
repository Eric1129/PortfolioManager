import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { ManageaccountsComponent } from './ManageAccounts/manageaccounts.component';
import { MarketMoversComponent } from './market-movers/market-movers.component';

const routes: Routes = [
  {path:'manageaccount', component:ManageaccountsComponent},
  {path:'cash-flow', component:CashFlowComponent},
  {path:'market-movers', component:MarketMoversComponent}
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
