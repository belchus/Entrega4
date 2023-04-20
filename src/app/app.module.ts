import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ReactiveFormsComponent } from './form/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './form/template-driven-forms/template-driven-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlumnosModule } from './alumnos/alumnos.module';
import { ProfesoresModule } from './profesores/profesores.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ReactiveFormsComponent,
    TemplateDrivenFormsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AlumnosModule,
    ProfesoresModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
