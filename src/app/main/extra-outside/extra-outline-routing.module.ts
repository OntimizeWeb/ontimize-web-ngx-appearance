import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtraOutlineComponent } from './extra-outline.component';


export const routes: Routes = [
  { path: '', component: ExtraOutlineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtraOutlineRoutingModule { }
