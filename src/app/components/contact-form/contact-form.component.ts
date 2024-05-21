import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit{

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.contactForm = this.formBuilder.group({
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      objet: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.http.post('http://localhost:3000/send-email', this.contactForm.value).subscribe(response => {
        console.log('Email sent successfully', response);
      }, error => {
        console.error('Error sending email', error);
      });
    }
  }


}
