import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http'
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AddNewTaskPage } from '../pages/add-new-task/add-new-task'
import { TaskManagerProvider } from '../providers/task-manager/task-manager';
import { RestProvider } from '../providers/rest/rest';
import { AddNewProductPage } from '../pages/add-new-product/add-new-product'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AddNewTaskPage,
    AddNewProductPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    AddNewTaskPage,
    AddNewProductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TaskManagerProvider,
    RestProvider
  ]
})
export class AppModule {}
