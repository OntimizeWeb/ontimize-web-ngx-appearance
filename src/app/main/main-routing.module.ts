import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';

import { MainComponent } from './main.component';



import { HomeModule } from './home/home.module';

import { AppearanceModule } from './appearance/appearance.module';

export function loadHomeModule() {
  return HomeModule;
}

export function loadAppearanceModule() {
  return AppearanceModule;
}

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: loadHomeModule },
      { path: 'appearance', loadChildren: loadAppearanceModule }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
