  // Title: Capstone Project - Loan Calculator App
  // Author: Professor Krasso
  // Date: 16 Dec 2022
  // Modified By: Kayla McDanel
  // Description: Loan Calculator App
  // Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

//import components to add to routes
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CalculatorComponent } from './calculator/calculator.component';

//add paths to components
const routes: Routes = [
  {
    path: '',
    component: CalculatorComponent
  },
  {
    path:'home',
    component: CalculatorComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
