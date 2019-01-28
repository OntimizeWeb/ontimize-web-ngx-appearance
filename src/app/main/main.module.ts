import { NgModule } from '@angular/core';
import { OntimizeWebModule, O_INPUTS_OPTIONS } from 'ontimize-web-ngx';
import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './main.component';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent
  ],
  providers: [
    { provide: O_INPUTS_OPTIONS, useValue: { iconColor: 'accent' } }

  ],
})
export class MainModule { }
