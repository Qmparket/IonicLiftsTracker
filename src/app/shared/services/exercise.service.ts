import { Injectable } from '@angular/core';
import { _sanitizeStyle } from '@angular/core/src/sanitization/style_sanitizer';
import { BehaviorSubject } from 'rxjs';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private _title = new BehaviorSubject<string>('');
  private _exerciseList = new BehaviorSubject<string[]>(['']);

  title = this._title.asObservable();
  exerciseList = this._exerciseList.asObservable();

  backExercises = ['Deadlift', 'Barbell Row', 'Pull-Up', 'Chin-Up', 'Seated Cable Row', 'Lat Pull-Down'];
  chestExercises = ['Bench Press', 'Incline Bench Press', 'Cable Fly', 'Dips', 'Push-up'];
  legExercises = ['Leg Press', 'Step up', 'Barbell Squat', 'Lunge', 'Bulgarian Split Squat', 'Deadlift'];
  absExercises = ['Hanging Leg Raises', 'Crunches', 'Kneeling Cable Crunch', 'Russian Twist', 'Ab-Wheel', ];

  constructor(private route: NavController) { }

  editContent(title: string) {
    console.log(title);
    this._title.next(title);
    switch (title) {
        case 'chest':
          this._exerciseList.next(this.chestExercises);
          break;
        case 'back':
        this._exerciseList.next(this.backExercises);
          break;
        case 'legs':
        this._exerciseList.next(this.legExercises);
          break;
        case 'abs':
        this._exerciseList.next(this.absExercises);
          break;
      }
      this.route.navigateForward('tabs/main');
    }
}
