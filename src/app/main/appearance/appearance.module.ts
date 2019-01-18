import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { AppearanceRoutingModule } from './appearance-routing.module';


@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    AppearanceRoutingModule
  ],
  declarations: [ ]
})
export class AppearanceModule { }
