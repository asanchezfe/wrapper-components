import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComplexInputComponent } from './complex-input/complex-text.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [AppComponent, InputComponent, FormGroupComponent, ComplexInputComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
