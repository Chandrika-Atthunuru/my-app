import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { TableComponent } from './table/table.component';
import { VehiclestableComponent } from './vehiclestable/vehiclestable.component';
import { CarsComponent } from './cars/cars.component';
import { MyntraComponent } from './myntra/myntra.component';
import { BikesComponent } from './bikes/bikes.component';
import {HttpClientModule} from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { ReloadComponent } from './reload/reload.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { CreateBikeComponent } from './create-bike/create-bike.component';
import { CreateAccountsComponent } from './create-accounts/create-accounts.component';
import { CreateUserFormComponent } from './create-user-form/create-user-form.component';
import { CreateUserFormExComponent } from './create-user-form-ex/create-user-form-ex.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    AboutComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    TableComponent,
    VehiclestableComponent,
    CarsComponent,
    MyntraComponent,
    BikesComponent,
    AccountsComponent,
    FlipkartComponent,
    MailComponent,
    ReloadComponent,
    PhotogalleryComponent,
    CreateBikeComponent,
    CreateAccountsComponent,
    CreateUserFormComponent,
    CreateUserFormExComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
