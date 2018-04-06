import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'landwerk-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  private contactMessage: ContactMessage;
  private contactForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.contactMessage = new ContactMessage();
    this.contactForm = new FormGroup({
      'name': new FormControl(this.contactMessage.name, [Validators.required]),
      'email': new FormControl(this.contactMessage.email, [Validators.required, Validators.email]),
      'phone': new FormControl(this.contactMessage.phone),
      'subject': new FormControl(this.contactMessage.subject, [Validators.required]),
      'message': new FormControl(this.contactMessage.message, [Validators.required])
    });
  }

  get contact() { return this.contactForm; }
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get phone() { return this.contactForm.get('phone'); }
  get subject() { return this.contactForm.get('subject'); }
  get message() { return this.contactForm.get('message'); }

  onSubmit() {
    if(!this.contactForm.invalid) {
      console.log(this.contactForm.value);
    }
  }
}

export interface IContactMessage {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export class ContactMessage implements IContactMessage {
  constructor(
    public name = '',
    public email = '',
    public phone = null,
    public subject = '',
    public message = ''
  ) {}
}