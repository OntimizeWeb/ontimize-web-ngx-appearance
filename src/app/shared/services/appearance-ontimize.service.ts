import { Injector } from '@angular/core';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

import { OntimizeService, LoginService, AppConfig } from 'ontimize-web-ngx';

export class AppearanceOntimizeService extends OntimizeService {

  static mappings: Object = {
    'ESalesBudgets': '/sales-budgets.json',
    'ECompanys': '/companys.json',
    'EVersionsSalesBudgets': '/versions-sales-budget.json',
    'ECustomer': '/customer.json',
    'EBusinessGroup': '/business-group.json',
    'ESalesman': '/salesman.json'
  };

  constructor(protected injector: Injector) {
    super(injector);
  }

  public getDefaultServiceConfiguration(serviceName?: string): Object {

    let loginService = this.injector.get(LoginService);
    let configuration = this.injector.get(AppConfig).getServiceConfiguration();

    let servConfig = {};
    if (serviceName && configuration.hasOwnProperty(serviceName)) {
      servConfig = configuration[serviceName];
    }
    servConfig['session'] = loginService.getSessionInfo();
    return servConfig;
  }

  public configureService(config: any): void {
    this._urlBase = './assets/dummy-data';
    this._sessionid = config.session ? config.session.id : -1;
    this._user = config.session ? config.session.user : '';

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
    console.log(entity);
    var url = this._urlBase + AppearanceOntimizeService.mappings[entity];

    let _innerObserver: any;
    const dataObservable = new Observable(observer => _innerObserver = observer);

    const self = this;
    this.httpClient.get(url).subscribe(resp => {

      // Prepare response for ontimize components
      let response = {
        code: 0,
        data: resp['data'],
        message: ''
      };
      _innerObserver.next(response);
    }, error => {
      self.parseUnsuccessfulQueryResponse(error, _innerObserver);
    }, () => _innerObserver.complete());
    return dataObservable.pipe(share());
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
