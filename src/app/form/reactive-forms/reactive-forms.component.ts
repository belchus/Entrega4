import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Alumnos } from 'src/app/models/alumnos.model';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
 /* nombreControl = new FormControl(
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

  numeroControl = new FormControl<number | null>(
    null,
    [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(8)
    ])

  entregableControl = new FormControl<Date | null>(
    null,
    [
      Validators.required,
    ])
  promedioControl = new FormControl<number | null>(
    null,
    [
      Validators.required,
      Validators.minLength(0),
      Validators.maxLength(10)
    ])
    */

  registerForm: FormGroup;


  constructor(public formBuilder: FormBuilder) {

    this.registerForm = this.formBuilder.group({
      firstName:['',[Validators.required,Validators.minLength(4)]],
      lastName: ['',[Validators.required,Validators.minLength(4)]],
      email: ['',[Validators.required,Validators.email,Validators.minLength(11)]],
    //  number:[null,[Validators.required,Validators.min(8000000),Validators.max(1000000),]],
      fechaDeEntregable:[null,[Validators.required]],
      promedio:[null,[Validators.required,Validators.min(1),Validators.max(10)]],
    });
  }

  @Output() addAlumno = new EventEmitter<Alumnos>();
  @Output() close = new EventEmitter<boolean>();



  get nombreControlIsInvalid(): boolean {
    return !!(this.registerForm.get('firstName')?.invalid && this.registerForm.get('firstName')!.touched);
  }

  onSubmit():void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      console.log(this.registerForm);
      return;
    }
    const alumno: Alumnos = {
      id: this.newId(),
      firstName: this.registerForm.get('firstName')!.value,
      lastName: this.registerForm.get('lastName')!.value,
      email: this.registerForm.get('email')!.value,
     // number: this.registerForm.get('number')!.value,
      fechaDeEntregable: this.registerForm.get('fechaDeEntregable')!.value,
      promedio: this.registerForm.get('promedio')!.value
     
    };
    console.log(this.registerForm);
    this.addAlumno.emit(alumno);
    console.log(this.registerForm);
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