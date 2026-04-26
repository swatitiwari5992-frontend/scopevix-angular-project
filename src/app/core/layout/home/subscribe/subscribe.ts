import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './subscribe.html',
  styleUrl: './subscribe.css',
})
export class Subscribe {
  welcomeTitle: string = "Welcome to ScopeVix";
  Title: string = "Your Business Find SEO Solutions ";
  newsletterForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.newsletterForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]]
    });
  }
  onSubmit() {
    if (this.newsletterForm.valid) {
      console.log('Email:', this.newsletterForm.value.email);
      alert('Thank you for subscribing!');
      this.newsletterForm.reset();
    }
    else {
      alert('Please enter a valid email address!');
    }
  }

}
