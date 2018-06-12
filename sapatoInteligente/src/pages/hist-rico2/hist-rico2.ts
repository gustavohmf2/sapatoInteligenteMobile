import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistRico3Page } from '../hist-rico3/hist-rico3';

@Component({
  selector: 'page-hist-rico2',
  templateUrl: 'hist-rico2.html'
})
export class HistRico2Page {

  constructor(public navCtrl: NavController) {
  }
  goToHistRico3(params){
    if (!params) params = {};
    this.navCtrl.push(HistRico3Page);
  }
}
