import { NgClass, NgIf, TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroupService } from '../../shared/services/form-group/form-group.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-errors-validation',
  standalone: true,
  imports: [NgIf, NgClass, TitleCasePipe],
  templateUrl: './errors-validation.component.html',
  styleUrl: './errors-validation.component.scss',
})
export class ErrorsValidationComponent implements OnInit {
  @Input() errorName!: string;
  myForm!: FormGroup;
  constructor(private form: FormGroupService) {}
  ngOnInit(): void {
    this.myForm = this.form.myForm;
  }
}
