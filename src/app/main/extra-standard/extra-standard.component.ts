import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { OFormComponent } from 'ontimize-web-ngx';
import { AppearanceOntimizeService } from '../../shared/services/appearance-ontimize.service';

@Component({
  selector: 'extra-standard-component',
  templateUrl: 'extra-standard.component.html'
})

export class ExtraStandardComponent implements OnInit {

  @ViewChild('oForm') oForm: OFormComponent;

  protected appearanceOntimizeService: AppearanceOntimizeService;
  constructor(
    protected injector: Injector) {

    this.appearanceOntimizeService = this.injector.get(AppearanceOntimizeService);
  }


  ngOnInit() {

    let serviceCfg = this.appearanceOntimizeService.getDefaultServiceConfiguration();
    this.appearanceOntimizeService.configureService(serviceCfg);
    let self = this;
    this.appearanceOntimizeService.query({}, [], 'ESalesBudgets')
      .subscribe(
        res => {

          self.oForm._setData(res.data);

        },
        error => console.log(error)
      );
  }
}
