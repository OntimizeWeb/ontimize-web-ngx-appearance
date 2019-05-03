import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeModule } from './home/home.module';
import { ExtraStandardModule } from './extra-standard/extra-standard.module';
import { ExtraFillModule } from './extra-fill/extra-fill.module';
import { ExtraOutlineModule } from './extra-outside/extra-outline.module';

export function loadHomeModule() {
  return HomeModule;
}

export function loadStandardModule() {
  return ExtraStandardModule;
}

export function loadFillModule() {
  return ExtraFillModule;
}

export function loadOutsideModule() {
  return ExtraOutlineModule;
}

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: loadHomeModule },
      { path: 'standard', loadChildren: loadStandardModule },
      { path: 'fill', loadChildren: loadFillModule },
      { path: 'outline', loadChildren: loadOutsideModule }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
