import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtraStandardComponent } from './extra-standard.component';


export const routes: Routes = [
  { path: '', component: ExtraStandardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtraStandardRoutingModule { }
