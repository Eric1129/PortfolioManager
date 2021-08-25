import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateaccountComponent } from './CreateAccount/createaccount.component';

const routes: Routes = [
  {path:'create-account', component:CreateaccountComponent},
  {path:'createaccount',component:CreateaccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
