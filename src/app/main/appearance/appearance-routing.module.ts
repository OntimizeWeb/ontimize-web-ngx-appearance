import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtraStandardModule } from './extra-standard/extra-standard.module';
import { ExtraFillModule } from './extra-fill/extra-fill.module';
import { ExtraOutlineModule } from './extra-outside/extra-outline.module';


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


  { path: '', redirectTo: 'standard', pathMatch: 'full' },
  { path: 'standard', loadChildren: loadStandardModule },
  { path: 'fill', loadChildren: loadFillModule },
  { path: 'outline', loadChildren: loadOutsideModule }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppearanceRoutingModule { }
