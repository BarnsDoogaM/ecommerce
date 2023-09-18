import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  paymentForm: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(5)]],
      cvv: ['', [Validators.required, Validators.minLength(3)]],
      OrderSummary: ['', [Validators.required, Validators.minLength(17)]],
      shippingAddress: ['', [Validators.required, Validators.minLength(50)]],
      expiryDate: ['', [Validators.required, Validators.minLength(5)]]
    })
  }
  save() {
    console.log(this.paymentForm.value);
  }


}
