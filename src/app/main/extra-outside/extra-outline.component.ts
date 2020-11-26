import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { OFormComponent } from 'ontimize-web-ngx';
import { AppearanceOntimizeService } from '../../shared/services/appearance-ontimize.service';

@Component({
  selector: 'extra-outline-component',
  templateUrl: 'extra-outline.component.html'
})

export class ExtraOutlineComponent implements OnInit {
  @ViewChild('oForm', { static: true }) oForm: OFormComponent;

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
          self.oForm.setData(res.data);
        },
        error => console.log(error)
      );
  }

}
