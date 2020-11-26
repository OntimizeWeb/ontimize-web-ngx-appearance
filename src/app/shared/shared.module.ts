import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CommonModule } from '@angular/common';
import { ThemePickerModule, ThemePicker } from './theme-picker/theme-picker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  imports: [
    OntimizeWebModule
  ],
  declarations: [
    
  ],
  exports: [
    CommonModule,
    ThemePickerModule
  ]
})
export class SharedModule { }
