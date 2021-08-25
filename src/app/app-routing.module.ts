import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageaccountsComponent } from './ManageAccounts/manageaccounts.component';

const routes: Routes = [
  {path:'manageaccount', component:ManageaccountsComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
