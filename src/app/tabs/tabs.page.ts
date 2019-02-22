import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ExerciseService } from '../shared/services/exercise.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor (private route: NavController, private exerciseService: ExerciseService ) {
  }

  buttonClicked(bodyPart: string) {
    this.exerciseService.editContent(bodyPart);
  }
}
