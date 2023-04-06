import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ReactiveFormsComponent } from './form/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './form/template-driven-forms/template-driven-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ToolbarComponent,
    ReactiveFormsComponent,
    TemplateDrivenFormsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
