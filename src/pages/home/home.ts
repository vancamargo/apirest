
import { Component, NgModule } from '@angular/core';
import { NavController } from 'ionic-angular';

 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(public navCtrl: NavController) { }
 
  opencreateAccount() {
    this.navCtrl.push('CreateAccountPage');
  }
 
  openLogin() {
    this.navCtrl.push('LoginPage');
  }
 
  openListUser() {
    this.navCtrl.push('UsersListPage');
  }
}