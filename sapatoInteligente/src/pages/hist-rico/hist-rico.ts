import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistRico2Page } from '../hist-rico2/hist-rico2';
import { HistRico3Page } from '../hist-rico3/hist-rico3';

@Component({
  selector: 'page-hist-rico',
  templateUrl: 'hist-rico.html'
})
export class HistRicoPage {

  constructor(public navCtrl: NavController) {
  }
  goToHistRico2(params){
    if (!params) params = {};
    this.navCtrl.push(HistRico2Page);
  }goToHistRico3(params){
    if (!params) params = {};
    this.navCtrl.push(HistRico3Page);
  }
}
