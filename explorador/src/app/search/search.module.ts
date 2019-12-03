import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { MatCardModule } from '@angular/material/card';
import { SelectorsComponent } from './selectors/selectors.component';
import { ResultComponent } from './result/result.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SearchComponent, SelectorsComponent, ResultComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatListModule,
    SharedModule
  ]
})
export class SearchModule { }
