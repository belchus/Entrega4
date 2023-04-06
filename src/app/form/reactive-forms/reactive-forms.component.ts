import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Alumnos } from 'src/app/models/alumnos.model';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  nombreControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15)
    ]
    )

  emailControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.email,
    ]
  );
  apellidoControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15)
    ])

    numeroControl= new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8)
      ])

      entregableControl= new FormControl(
        '',
        [
          Validators.required,
        ])
      promedioControl= new FormControl(
          '',
          [
            Validators.required,
            Validators.minLength(0),
            Validators.maxLength(10)
          ])
  registerForm: FormGroup;


  constructor(public formBuilder: FormBuilder) {

    this.registerForm = this.formBuilder.group({
    firstName:this.nombreControl,
    lastName: this.apellidoControl,
    email:this.emailControl
     
    });
  }

  @Output() addAlumno = new EventEmitter<Alumnos>();
  @Output() close = new EventEmitter<boolean>();



  get nombreControlIsInvalid(): boolean {
    return !!(this.nombreControl?.invalid && this.nombreControl.touched);
  }

  onSubmit() {
    if (this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
      return;
    }
    const alumno: Alumnos = {
      id: this.newId(),
      firstName:this.nombreControl.value,
      lastName: this.apellidoControl.value,
      email: this.emailControl.value,

    };
    this.addAlumno.emit(alumno);
    this.registerForm.reset();
    this.close.emit(true);
  }

  newId(): number {
    return Math.floor(Math.random() * 10000) + 1;
  }
  closeForm() {
    this.registerForm.reset();
    this.close.emit(true);
  }

}