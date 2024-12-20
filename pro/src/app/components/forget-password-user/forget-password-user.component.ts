import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'forget-password-user',
  templateUrl: './forget-password-user.component.html',
  styleUrls: ['./forget-password-user.component.css']
})
export class ForgetPasswordUserComponent {
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({

      email: ['', [Validators.required, Validators.email]],

     

    });
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Submitted!', this.registrationForm.value);
    }
  }
}
