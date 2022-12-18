  // Title: Capstone Project - Loan Calculator App
  // Author: Professor Krasso
  // Date: 16 Dec 2022
  // Modified By: Kayla McDanel
  // Description: Loan Calculator App
  // Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

  //component for calculating interest
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
// defines interest variable 
export class InterestComponent implements OnInit {

  @Input() interest!: number;

  constructor() {

  }

  ngOnInit(): void {
    
  }

}
