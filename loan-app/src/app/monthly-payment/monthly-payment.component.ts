  // Title: Capstone Project - Loan Calculator App
  // Author: Professor Krasso
  // Date: 16 Dec 2022
  // Modified By: Kayla McDanel
  // Description: Loan Calculator App
  // Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

  //component for calculating monthly payments

import { Component,OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-monthly-payment',
  templateUrl: './monthly-payment.component.html',
  styleUrls: ['./monthly-payment.component.css']
})
export class MonthlyPaymentComponent implements OnInit {

  //define the monthly payment variable
  @Input() monthlyPayment!: number;

  constructor() { }

  ngOnInit(): void {
    
  }
}
