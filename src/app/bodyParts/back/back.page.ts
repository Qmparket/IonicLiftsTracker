import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back',
  templateUrl: './back.page.html',
  styleUrls: ['./back.page.scss'],
})
export class BackPage implements OnInit {


  lifts: string[] = ['Deadlift', 'Barbell Row', 'Pull-Up', 'Chin-Up', 'Seated Cable Row', 'Lat Pull-Down'];
  lift = null;
  exercise: string;
  numberOfSets: any = '0';
  numberOfSetsEdited: number;
  setsArray: number[];
  constructor() { }

  customPopoverOptions: any = {
    header: 'Back Exercises',
    message: 'Select the exercise you are doing'
  };

  ngOnInit() {}

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
