  // Title: Capstone Project - Loan Calculator App
  // Author: Professor Krasso
  // Date: 16 Dec 2022
  // Modified By: Kayla McDanel
  // Description: Loan Calculator App
  // Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.
  //Link below used to solve FormGroup error
  //https://www.telerik.com/blogs/fixing-cant-bind-to-formgroup-since-not-known-property-of-form-error-angular

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import generated components
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MonthlyPaymentComponent } from './monthly-payment/monthly-payment.component';
import { InterestComponent } from './interest/interest.component';
import { CalculatorComponent } from './calculator/calculator.component';

//adding additional import statements for material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'

//add components to declarations
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    MonthlyPaymentComponent,
    InterestComponent,
    CalculatorComponent,
  ],

//add material mods to imports array
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    FlexLayoutModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
