import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListCursosComponent } from './list-cursos/list-cursos.component';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';


@NgModule({
  declarations: [
    ListCursosComponent,
    CursoDetailComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
