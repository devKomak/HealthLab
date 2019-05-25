import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'myexercises',
  templateUrl: 'myexercises.html'
})
export class MyExercisesPage {

  videos: any[] = {
    {
      title: 'Ćwiczenia wzmacniające kręgosłup',
      video: 'https://www.youtube.com/watch?v=w33yS-OWRR4',
    }
}

  constructor(public navCtrl: NavController){}
}