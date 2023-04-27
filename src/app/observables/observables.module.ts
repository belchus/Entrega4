import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ObservablesComponent } from './observables.component';

@NgModule({
  // AGREGUE LA DECLARACION PARA EXPORTARLO
  declarations: [ObservablesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    // ESTA LINEA CONTIENE ERROR, NO SE PUEDE EXPORTAR UN COMPONENTE QUE NO HA SIDO DECLARADO EN ESTE MODULO
    ObservablesComponent
  ],
})
export class ObservablesModule { }
