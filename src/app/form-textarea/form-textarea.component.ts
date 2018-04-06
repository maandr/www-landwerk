import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'landwerk-form-textarea',
  templateUrl: './form-textarea.component.html',
  styleUrls: ['./form-textarea.component.scss']
})
export class FormTextareaComponent implements OnInit {

  @Input() descriptor: string;
  @Input() control: FormControl;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() feedback?: string;

  get hasErrors(): boolean {
    return this.control.invalid && (this.control.dirty || this.control.touched);
  }

  ngOnInit() {}
}
