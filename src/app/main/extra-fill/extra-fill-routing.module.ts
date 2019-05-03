import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtraFillComponent } from './extra-fill.component';


export const routes: Routes = [
  { path: '', component: ExtraFillComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtraFillRoutingModule { }
