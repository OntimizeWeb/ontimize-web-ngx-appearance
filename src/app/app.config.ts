import { Config } from 'ontimize-web-ngx';
import { SERVICE_CONFIG } from './shared/app.services.config';
import { MENU_CONFIG } from './shared/app.menu.config';
import { AppearanceOntimizeService } from './shared/services/appearance-ontimize.service';

export const CONFIG: Config = {
  // The base path of the URL used by app services.
  apiEndpoint: 'https://try.ontimize.com/QSAllComponents/rest',
  // apiEndpoint: 'http://10.7.0.147:9080/qsallcomponents-jee/services/rest',

  // Application identifier. Is the unique package identifier of the app.
  // It is used when storing or managing temporal data related with the app.
  // By default is set as 'ontimize-web-uuid'.
  uuid: 'com.ontimize.web.ngx.appearance',


  // Title of the app
  title: 'Ontimize web appearance',

  //  Language of the application.
  locale: 'en',

  // The service type used (Ontimize REST standart, Ontimize REST JEE
  // or custom implementation) in the whole application.
  serviceType: AppearanceOntimizeService,

  // Configuration parameters of application services.
  servicesConfiguration: SERVICE_CONFIG,

  appMenuConfiguration: MENU_CONFIG,

  applicationLocales: ['es', 'en'],



};
