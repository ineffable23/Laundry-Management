import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { AddOrdersComponent } from './order/add-orders/add-orders.component';
import { EditOrdersComponent } from './order/edit-orders/edit-orders.component';
import { OrdersListComponent } from './order/orders-list/orders-list.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'verify-email', component: VerifyEmailComponent },
    { path: 'place-order', component: AddOrdersComponent },                       // catch-all in case no other path matched
    { path: 'view-order', component: OrdersListComponent },                       // catch-all in case no other path matched
    { path: 'edit-order/:id', component: EditOrdersComponent },                       // catch-all in case no other path matched
    { path: '**', component: HomeComponent },                       // catch-all in case no other path matched
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
