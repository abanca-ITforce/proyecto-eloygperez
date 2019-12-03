import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule
  ],
  exports: [ListComponent]
})
export class SharedModule { }
