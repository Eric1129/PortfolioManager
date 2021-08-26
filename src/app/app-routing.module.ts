import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { ManageaccountsComponent } from './ManageAccounts/manageaccounts.component';

const routes: Routes = [
  {path:'manageaccount', component:ManageaccountsComponent},
  {path:'cash-flow', component:CashFlowComponent},

 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
