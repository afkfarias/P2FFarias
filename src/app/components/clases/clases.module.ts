import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasesRoutingModule } from './clases-routing.module';
import { ListClasesComponent } from './list-clases/list-clases.component';
import { ClaseDetailComponent } from './clase-detail/clase-detail.component';


@NgModule({
  declarations: [
    ListClasesComponent,
    ClaseDetailComponent
  ],
  imports: [
    CommonModule,
    ClasesRoutingModule
  ]
})
export class ClasesModule { }
