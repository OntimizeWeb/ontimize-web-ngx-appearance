import { NgModule, Injector } from '@angular/core';

import {
  APP_CONFIG,
  ONTIMIZE_MODULES,
  ONTIMIZE_PROVIDERS,
  OntimizeWebModule
} from 'ontimize-web-ngx';

import { CONFIG } from './app.config';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppearanceOntimizeService } from './shared/services/appearance-ontimize.service';

// Standard providers...
// Defining custom providers (if needed)...
export const customProviders: any = [{
  provide: AppearanceOntimizeService,
  useFactory: getAppearanceOntimizeServiceProvider,
  deps: [Injector]
}
];

export function getAppearanceOntimizeServiceProvider(injector: Injector) {
  return new AppearanceOntimizeService(injector);
}

@NgModule({
  imports: [
    ONTIMIZE_MODULES,
    OntimizeWebModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: APP_CONFIG, useValue: CONFIG },
    ...ONTIMIZE_PROVIDERS,
    ...customProviders
  ],
})
export class AppModule { }

