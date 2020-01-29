import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() formControlName: string; // this does the trick

  @Input() label: string;

  @Input() type = 'text';

  value = '';

  private onTouchedCallback: () => void = () => {};
  private onChangeCallback: (_: any) => void = () => {};

  constructor() {}

  ngOnInit() {}

  writeValue(value: string) {
    this.value = value;
  }

  change(event) {
    this.onTouchedCallback();
    this.onChangeCallback(event.target.value);
    console.log('cambiar', event.target.value);
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
