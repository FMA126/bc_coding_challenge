import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from '../create-customer/create-customer.component';
import { CustomerProfileComponent } from '../customer-profile/customer-profile.component';
import { CustomerComponent } from '../customer/customer.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'customers/:id', component: CustomerProfileComponent },
  { path: 'create-customer', component: CreateCustomerComponent },
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
