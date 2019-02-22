import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MainContentPage } from './main-content.page';
import { ExerciseService } from '../services/exercise.service';

const routes: Routes = [
  {
    path: '',
    component: MainContentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainContentPage],
  providers: [ExerciseService]
})
export class MainContentPageModule {}
