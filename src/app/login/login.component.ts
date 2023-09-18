import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  customerForm: FormGroup;
  // customer = new Customer();
    constructor(private route: Router) { }
  
    ngOnInit(): void {
      this.customerForm = new FormGroup({
        userName: new FormControl('', [Validators.required, Validators.minLength(2)]),
        password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      })
    }

    save(){
      
    }
  
    };
  
  
   


