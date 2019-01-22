import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { OFormComponent } from 'ontimize-web-ngx';
import { AppearanceOntimizeService } from 'app/shared/services/appearance-ontimize.service';

@Component({
  selector: 'extra-outline-component',
  templateUrl: 'extra-outline.component.html'
})

export class ExtraOutlineComponent implements OnInit {
  @ViewChild('oForm') oForm: OFormComponent;
  companyData: Array<Object> = [{
    id: 1,
    name: 'Gestión del Valor y Soluciones, S.L.'
  }];
  versionData: Array<Object> = [{
    version: 0
  }, {
    version: 1
  }, {
    version: 2
  }, {
    version: 3
  }, {
    version: 4
  }, {
    version: 5
  }];
  customerData: Array<Object> = [{
    id: 1,
    name: 'TAGUA'
  }];
  offerTypeData: Array<Object> = [{
    id: 1,
    name: 'Solución'
  }];
  countryData: Array<Object> = [{
    id: 1,
    name: 'España'
  }];
  transportType: Array<Object> = [{
    id: 1,
    name: 'Facturable'
  }];
  tableData: Array<Object> = [
    {
      ID: 1,
      COD_ARTICULO: 'DESB.5000H',
      DESCRIPCION: 'DESBASTE 60 m3/h',
      CANTIDAD: 1,
      CANTIDAD_REAL: 1,
      TARIFA: 'TAGA',
      PRECIO_UNITARIO: 13500,
      IMPORTE_UNITARIO_NETO: 13500,
      IMPORTE_BRUTO: 13500,
      IMPORTE_NETO: 13500,
      BASE_IMPONIBLE: 17608.7,
      IMPORTE_TOTAL: 17608.7
    },
    {
      ID: 2,
      COD_ARTICULO: 'HOMOENT.500H',
      DESCRIPCION: 'BALSA HOMO 400',
      CANTIDAD: 1,
      CANTIDAD_REAL: 1,
      TARIFA: 'TAGA',
      PRECIO_UNITARIO: 29000,
      IMPORTE_UNITARIO_NETO: 29000,
      IMPORTE_BRUTO: 29000,
      IMPORTE_NETO: 29000,
      BASE_IMPONIBLE: 37826.09,
      IMPORTE_TOTAL: 37826.09
    },
    {
      ID: 3,
      COD_ARTICULO: 'BIOSUP.500H',
      DESCRIPCION: 'BIOLOGICO SUPERCICIE',
      CANTIDAD: 1,
      CANTIDAD_REAL: 1,
      TARIFA: 'TAGA',
      PRECIO_UNITARIO: 103177.5,
      IMPORTE_UNITARIO_NETO: 103177.5,
      IMPORTE_BRUTO: 103177.5,
      IMPORTE_NETO: 103177.5,
      BASE_IMPONIBLE: 134579.35,
      IMPORTE_TOTAL: 134579.35
    },
    {
      ID: 4,
      COD_ARTICULO: 'MBR.500H',
      DESCRIPCION: 'MBR',
      CANTIDAD: 1,
      CANTIDAD_REAL: 1,
      TARIFA: 'TAGA',
      PRECIO_UNITARIO: 514062,
      IMPORTE_UNITARIO_NETO: 514062,
      IMPORTE_BRUTO: 514062,
      IMPORTE_NETO: 514062,
      BASE_IMPONIBLE: 670515.65,
      IMPORTE_TOTAL: 670515.65
    },
    {
      ID: 5,
      COD_ARTICULO: 'ASG.500H',
      DESCRIPCION: 'ESPESADOR',
      CANTIDAD: 1,
      CANTIDAD_REAL: 1,
      TARIFA: 'TAGA',
      PRECIO_UNITARIO: 12000,
      IMPORTE_UNITARIO_NETO: 12000,
      IMPORTE_BRUTO: 12000,
      IMPORTE_NETO: 12000,
      BASE_IMPONIBLE: 15652.17,
      IMPORTE_TOTAL: 15652.17
    }
  ];

  date: Date = new Date('October 13, 2016 11:13:00');
  
  protected appearanceOntimizeService: AppearanceOntimizeService;
  constructor(
    protected injector: Injector) {
      
      this.appearanceOntimizeService = this.injector.get(AppearanceOntimizeService);
  }

 
  ngOnInit() {
    //  this.oForm.queryData({});
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
