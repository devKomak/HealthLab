import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MedicinesPage } from '../pages/medicines/medicines';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule }  from '@angular/router';
import { LoginComponent } from './login.component';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from './auth.guard';

const ROUTES = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
];

const firebaseConfig = {
    apiKey: "AIzaSyBbdfg98Zj4vLXCqm4p3H3vgpv_108vW18",
    authDomain: "healthlab-100.firebaseapp.com",
    databaseURL: "https://healthlab-100.firebaseio.com",
    projectId: "healthlab-100",
    storageBucket: "healthlab-100.appspot.com",
    messagingSenderId: "141315663759",
    appId: "1:141315663759:web:ebb47635f37d8abd"
  };
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MedicinesPage,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MedicinesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
})
export class AppModule {}
