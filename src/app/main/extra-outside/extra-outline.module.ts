import { NgModule } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../../shared/shared.module';
import { ExtraOutlineRoutingModule } from './extra-outline-routing.module';
import { ExtraOutlineComponent } from './extra-outline.component';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    ExtraOutlineRoutingModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  ],

  declarations: [ExtraOutlineComponent]
})
export class ExtraOutlineModule { }
