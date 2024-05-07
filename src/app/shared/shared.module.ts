import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {CdkMenuModule} from '@angular/cdk/menu';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';



import { NavBarComponent } from './nav-bar/nav-bar.component';

import { RouterModule, Routes } from '@angular/router';
import { NameJoinLastNamePipe } from './pipes/name-join-last-name.pipe';


@NgModule({
  declarations: [
    NavBarComponent,
    NameJoinLastNamePipe
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    CdkMenuModule,
    MatCardModule,
    MatTableModule,
    RouterModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    CdkMenuModule,
    MatCardModule,
    MatTableModule,
    NameJoinLastNamePipe,
    NavBarComponent
  ]
})
export class SharedModule { }
