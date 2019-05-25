import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MedicinesPage } from '../pages/medicines/medicines';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DishesPage } from '../pages/dishes/dishes';
import { LiquidsPage } from '../pages/liquids/liquids';
import { MyExercisesPage } from '../pages/myexercises/myexercises';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MedicinesPage, 
    LiquidsPage,
    DishesPage, 
    MyExercisesPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MedicinesPage,
    LiquidsPage,
    DishesPage,
    MyExercisesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
