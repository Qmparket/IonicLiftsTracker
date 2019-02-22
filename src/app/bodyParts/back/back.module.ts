import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BackPage } from './back.page';
import { MainContentPageModule } from 'src/app/shared/main-content/main-content.module';

const routes: Routes = [
  {
    path: '',
    component: BackPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MainContentPageModule
  ],
  declarations: [BackPage]
})
export class BackPageModule {}
