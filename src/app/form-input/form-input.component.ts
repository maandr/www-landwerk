import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'landwerk-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

  @Input() descriptor: string;
  @Input() control: FormControl;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() feedback?: string;

  get hasErrors(): boolean {
    return this.feedback
      && this.control.invalid
      && (this.control.dirty || this.control.touched);
  }
  
  ngOnInit() {}
}