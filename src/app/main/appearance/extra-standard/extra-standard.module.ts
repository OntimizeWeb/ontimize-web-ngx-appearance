import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../../shared/shared.module';
import { ExtraStandardRoutingModule } from './extra-standard-routing.module';
import { ExtraStandardComponent } from './extra-standard.component';


@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    ExtraStandardRoutingModule
  ],
  declarations: [ExtraStandardComponent ],
  providers: [
   // { provide: O_MAT_ERROR_OPTIONS, useValue: { type: 'lite' } }
  ]
})
export class ExtraStandardModule { }
