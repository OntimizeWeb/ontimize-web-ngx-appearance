import { Injector } from '@angular/core';
import { AppConfig, OntimizeService } from 'ontimize-web-ngx';
import { Observable } from 'rxjs';

export class AppearanceOntimizeService extends OntimizeService {

  static mappings: Object = {
    'ESalesBudgets': '/sales-budgets.json',
    'ECompanys': '/companys.json',
    'EVersionsSalesBudgets': '/versions-sales-budget.json',
    'ECustomer': '/customer.json',
    'EBusinessGroup': '/business-group.json',
    'ESalesman': '/salesman.json',
    'ECarrier': '/carrier.json',
    'ETransportType': '/transport-type.json',
    'EContact': '/contact.json',
    'ECountries': '/countries.json',
    'EProvinces': '/provinces.json',
    'EDivision': '/division.json',
    'ECarrierType': '/carrier-type.json',
    'EShipping': '/sales-shipping.json',
    'EIncoterm': '/inconterm.json',
    'EStorage': '/storage.json',
    'ESubStorage': '/substorage.json',
    'ELines': '/table-data.json'
  };

  constructor(protected injector: Injector) {
    super(injector);
  }

  public getDefaultServiceConfiguration(serviceName?: string): Object {
    let configuration = this.injector.get(AppConfig).getServiceConfiguration();

    let servConfig = {};
    if (serviceName && configuration.hasOwnProperty(serviceName)) {
      servConfig = configuration[serviceName];
    }
    return servConfig;
  }

  public configureService(config: any): void {
    this._urlBase = './assets/dummy-data';
    this.user = config.session ? config.session.user : '';

    if (config.entity !== undefined) {
      this.entity = config.entity;
    }
  }

  public startsession(user: string, password: string): Observable<any> {
    return undefined;
  }

  public endsession(user: string, sessionId: number): Observable<any> {
    return undefined;
  }

  public hassession(user: string, sessionId: number): Observable<any> {
    return undefined;
  }

  public query(kv?: Object, av?: Array<string>, entity?: string, sqltypes?: Object): Observable<any> {
    const url = this._urlBase + AppearanceOntimizeService.mappings[entity];

    const options = {
      headers: this.buildHeaders()
    };
    return this.doRequest({
      method: 'GET',
      url: url,
      options: options,
      successCallback: this.parseSuccessfulQueryResponse,
      errorCallBack: this.parseUnsuccessfulQueryResponse
    });
  }

  public advancedQuery(kv?: Object, av?: Array<string>, entity?: string, sqltypes?: Object,
    offset?: number, pagesize?: number, orderby?: Array<Object>): Observable<any> {
    return undefined;
  }

  public insert(av: Object = {}, entity?: string, sqltypes?: Object): Observable<any> {
    return undefined;
  }

  public update(kv: Object = {}, av: Object = {}, entity?: string,
    sqltypes?: Object): Observable<any> {
    return undefined;
  }

  public delete(kv: Object = {}, entity?: string, sqltypes?: Object): Observable<any> {
    return undefined;
  }

}
