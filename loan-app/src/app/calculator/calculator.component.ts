  // Title: Capstone Project - Loan Calculator App
  // Author: Professor Krasso
  // Date: 16 Dec 2022
  // Modified By: Kayla McDanel
  // Description: Loan Calculator App
  // Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

  //where the magic aka calculations happen

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})

//variables for fields
export class CalculatorComponent implements OnInit {
  loanForm!: FormGroup;
  monthlyPayment: number = 0;
  interest: number = 0;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loanForm = this.fb.group({
      loanAmount: [''],
      interestRate: [''],
      numOfYears: [''],
    });
  }

  
  calculateLoan() {
    const formValues = this.loanForm.value;
    const loanAmount = parseFloat(formValues.loanAmount);
    const interestRate = parseFloat(formValues.interestRate);
    const numOfYears = parseFloat(formValues.numOfYears);

    const numOfMonths = numOfYears * 12;
    const ratePerPeriod = interestRate / 100 / 12;

    //calculate monthly payments and interest
    this.monthlyPayment =
      (loanAmount *
        (ratePerPeriod * Math.pow(ratePerPeriod + 1, numOfMonths))) /
      (Math.pow(1 + ratePerPeriod, numOfMonths) - 1);
    this.interest = this.monthlyPayment * numOfMonths - loanAmount;
  }
  //clear entries
  clearEntries() {
    this.monthlyPayment = 0;
    this.interest = 0;
    this.loanForm.reset();
  }

  get form() {
    return this.loanForm.controls;
  }
}