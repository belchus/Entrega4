import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ObservablesComponent } from '../observables/observables.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ObservablesComponent,
  ],
  exports: [
   DashboardComponent
   ],
})
export class DashboardModule { }
