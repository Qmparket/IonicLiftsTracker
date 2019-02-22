import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.page.html',
  styleUrls: ['./main-content.page.scss'],
})
export class MainContentPage implements OnInit {
  title: string;
  lifts: string[];
  lift = null;
  numberOfSets: any = '0';
  numberOfSetsEdited: number;
  setsArray: number[];
  customPopoverOptions: any = {
    header: 'Back Exercises',
    message: 'Select the exercise you are doing'
  };

  constructor(private exerciseService: ExerciseService) {
   }

  ngOnInit() {
    this.exerciseService.title.subscribe(title => this.title = title);
    this.exerciseService.exerciseList.subscribe(lifts => this.lifts = lifts);
  }

  setsPicked() {
    let sets = this.numberOfSets.split(':')[0];
    if (<number>sets < 10) {
      sets = sets % 10;
    }
    this.numberOfSetsEdited = sets;
    this.setsArray = Array.apply(null, {length: this.numberOfSetsEdited + 1}).map(Function.call, Number);
    this.setsArray.splice(0, 1);
    console.log(this.setsArray);
  }

}
