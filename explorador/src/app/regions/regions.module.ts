import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionsRoutingModule } from './regions-routing.module';
import { RegionsComponent } from './regions.component';
import { MatCardModule } from '@angular/material/card';
import { RegionComponent } from './region/region.component';
import { InfoComponent } from './region/info/info.component';
import { CountriesComponent } from './region/countries/countries.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [RegionsComponent, RegionComponent, InfoComponent, CountriesComponent],
  imports: [
    CommonModule,
    RegionsRoutingModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatProgressBarModule,
    SharedModule
  ]
})
export class RegionsModule { }
