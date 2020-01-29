import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from './complex-text.component';

const formGroupMock = new FormGroupDirective([], []);
const formGroup = new FormGroup({ testing: new FormControl('') });
formGroupMock.form = formGroup;

describe('InputTextComponent', () => {
  let component: InputTextComponent;
  let fixture: ComponentFixture<InputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [InputTextComponent],
      providers: [{ provide: FormGroupDirective, useValue: formGroupMock }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextComponent);
    component = fixture.componentInstance;
    component.formControlName = 'testing';
    component.label = 'test.label';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
