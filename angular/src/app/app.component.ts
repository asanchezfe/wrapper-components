import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form = new FormGroup({
    sampleField: new FormControl(),
    secondField: new FormControl(23)
  });

  complexForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(6)])
  });

  invalidate() {
    this.complexForm.get('name').setErrors({ duplicated: true });
  }
}
