import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import { ExtraFillRoutingModule } from './extra-fill-routing.module';
import { ExtraFillComponent } from './extra-fill.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';


@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    ExtraFillRoutingModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }
  ],
  declarations: [ExtraFillComponent]
})
export class ExtraFillModule { }
