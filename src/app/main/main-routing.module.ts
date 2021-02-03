import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExtraFillModule } from './extra-fill/extra-fill.module';
import { ExtraOutlineModule } from './extra-outside/extra-outline.module';
import { ExtraStandardModule } from './extra-standard/extra-standard.module';
import { HomeModule } from './home/home.module';
import { MainComponent } from './main.component';

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
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'standard', loadChildren: () => import('./extra-standard/extra-standard.module').then(m => m.ExtraStandardModule) },
      { path: 'fill', loadChildren: () => import('./extra-fill/extra-fill.module').then(m => m.ExtraFillModule) },
      { path: 'outline', loadChildren: () => import('./extra-outside/extra-outline.module').then(m => m.ExtraOutlineModule) },
      { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
