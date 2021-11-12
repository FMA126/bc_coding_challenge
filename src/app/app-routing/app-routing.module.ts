import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerProfileComponent } from '../customer-profile/customer-profile.component';
import { CustomerComponent } from '../customer/customer.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'customer/:id', component: CustomerProfileComponent },
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
