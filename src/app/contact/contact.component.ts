import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landwerk-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  message: ContactMessage;

  constructor() { }

  ngOnInit() {
    this.message = {
      name: '',
      email: '',
      phone: null,
      subject: '',
      message: ''
    }
  }

  onSend() {
    console.log(this.message);
  }
}

export interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}