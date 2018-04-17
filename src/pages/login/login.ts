import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
 
  template:`
  <ion-header>

  <ion-navbar>
    <ion-title>Login</ion-title>
  </ion-navbar>

</ion-header>


<ion-content padding>
  
  <form [formGroup]="login" (ngSubmit)="loginForm()">

  <ion-item>
    <ion-label fixed> UserName</ion-label>
    <ion-input type="text" formControlName="username"></ion-input>
  </ion-item>

  <ion-item>
    <ion-label fixed> Password</ion-label>
    <ion-input type="password" formControlName="password"></ion-input>
  </ion-item>
  <ion-item>
    <button ion-button full round type="submit" [disabled]="!login.valid"> Sign In</button>
  </ion-item>

</form>
</ion-content>
  `
})
export class LoginPage {
  private login:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder:FormBuilder, private storage: Storage) {
      this.login = this.formBuilder.group({
        username:['', [Validators.compose([Validators.required, Validators.email])]],
        password:['', Validators.required]
      });

  }

  loginForm(){
      this.storage.set('username',this.login.value['username']);
      console.log(this.login.value);
      this.navCtrl.setRoot(HomePage);

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.storage.get('username').then((val) => {
        this.navCtrl.setRoot(HomePage);
    });
  }

}
