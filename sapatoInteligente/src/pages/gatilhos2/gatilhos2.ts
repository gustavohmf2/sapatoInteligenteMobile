import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GatilhosPage } from '../gatilhos/gatilhos';
import { Gatilhos2Page } from '../gatilhos2/gatilhos2';

@Component({
  selector: 'page-gatilhos2',
  templateUrl: 'gatilhos2.html'
})
export class Gatilhos2Page {

  constructor(public navCtrl: NavController) {
  }
  goToGatilhos(params){
    if (!params) params = {};
    this.navCtrl.push(GatilhosPage);
  }goToGatilhos2(params){
    if (!params) params = {};
    this.navCtrl.push(Gatilhos2Page);
  }
}
