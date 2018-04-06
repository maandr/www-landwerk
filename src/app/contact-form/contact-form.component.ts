import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'landwerk-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  private contactMessage: ContactMessage;
  private contactForm: FormGroup;

  inputs: IFormInput[];

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
    this.inputs = [
      new FormInput('name', 'Name', 'Ihr Name', this.contactForm.get('name'), 'Bitte gib deinen Namen an.'),
      new FormInput('email', 'E-Mail', 'Deine E-Mail', this.contactForm.get('email'), 'Gib eine gültige E-Mail-Adresse unter der wir dich kontaktieren können an.'),
      new FormInput('phone', 'Telefonnummer', 'Deine Telefonnummer', this.contactForm.get('phone')),
      new FormInput('subject', 'Betreff', 'Worum geht es?', this.contactForm.get('subject'), 'Gib eine kurze Beschreibung worum es geht.')
    ];
  }

  get contact() { return this.contactForm; }
  get message() { return this.contactForm.get('message'); }

  isInvalid(formControl: FormControl) {
    return formControl.invalid && (formControl.dirty || formControl.touched)
  }

  onSubmit() {
    if(!this.contactForm.invalid) {
      console.log(this.contactForm.value);
    }
  }
}

export interface IFormInput {
  name: string;
  label: string;
  placeholder: string;
  feedback?: string;
  formControl: AbstractControl;
  hasErrors: boolean;
}

export class FormInput implements IFormInput {
  constructor(
    public name: string,
    public label: string,
    public placeholder: string,
    public formControl: AbstractControl,
    public feedback: string = null
  )
  {}

  get hasErrors(): boolean {
    return this.formControl.invalid && (this.formControl.dirty || this.formControl.touched);
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