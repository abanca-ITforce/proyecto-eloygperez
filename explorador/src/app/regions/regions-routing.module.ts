import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionsComponent } from './regions.component';
import { RegionComponent } from './region/region.component';

const routes: Routes = [
  { path: '', component: RegionsComponent },
  { path: ':cod', component: RegionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionsRoutingModule { }
