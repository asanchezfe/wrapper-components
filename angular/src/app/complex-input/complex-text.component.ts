import { Component, forwardRef, Host, Input, Optional, SkipSelf } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormGroupDirective, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-complex-input',
  templateUrl: './complex-text.component.html',
  styleUrls: ['./complex-text.component.css', './form.commons.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ComplexInputComponent),
      multi: true
    }
  ]
})
export class ComplexInputComponent implements ControlValueAccessor {
  @Input() formControlName: string; // this does the trick

  @Input() label: string;

  value: string;

  private onTouchedCallback: () => void = () => {};
  private onChangeCallback: (_: any) => void = () => {};

  constructor(@Optional() @Host() @SkipSelf() private controlContainer: ControlContainer) {}

  get isRequired() {
    if (this.controlContainer) {
      const ctrlRef = (this.controlContainer as FormGroupDirective).form.get(this.formControlName);

      const validator = ctrlRef.validator ? ctrlRef.validator({} as AbstractControl) : null;
      if (validator && validator.required) {
        return true;
      }
    }
  }

  change(event) {
    this.onTouchedCallback();
    this.onChangeCallback(event.target.value);
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
