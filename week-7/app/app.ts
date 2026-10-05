import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  jobForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z]+( [a-zA-Z]+)*$')
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    contact: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$')
    ])
  });

  onSubmit() {
    if (this.jobForm.valid) {
      alert('Job Application Submitted Successfully');
      console.log(this.jobForm.value);
    }
  }
}
