import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { TableComponent } from './table/table.component';
import { VehiclestableComponent } from './vehiclestable/vehiclestable.component';
import { CarsComponent } from './cars/cars.component';
import { MyntraComponent } from './myntra/myntra.component';
import { BikesComponent } from './bikes/bikes.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { ReloadComponent } from './reload/reload.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { CreateBikeComponent } from './create-bike/create-bike.component';
import { CreateAccountsComponent } from './create-accounts/create-accounts.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateUserFormComponent } from './create-user-form/create-user-form.component';
import { CreateUserFormExComponent } from './create-user-form-ex/create-user-form-ex.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard',component:DashboardComponent, canActivate:[AuthenticationGuard],children:[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BmiComponent},
    {path:'table',component:TableComponent},
    {path:'vehiclestable',component:VehiclestableComponent},
    {path:'cars',component:CarsComponent},
    {path:'myntra',component:MyntraComponent},
    {path:'bikes',component:BikesComponent},
    {path:'accounts',component:AccountsComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'mail',component:MailComponent},
    {path:'reload',component:ReloadComponent},
    {path:'photogallery',component:PhotogalleryComponent},
    {path:'create-bike',component:CreateBikeComponent},
    {path:'create-accounts',component:CreateAccountsComponent},
    {path:'create-user-form',component:CreateUserFormComponent},
    {path:'create-user-form-ex',component:CreateUserFormExComponent}
  ]},
  {path:'', component:LoginComponent},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
