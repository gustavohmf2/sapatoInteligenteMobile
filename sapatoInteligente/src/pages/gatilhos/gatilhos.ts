import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-gatilhos',
  templateUrl: 'gatilhos.html'
})
export class GatilhosPage {

  constructor(public navCtrl: NavController) {
  }
  goToGatilhos2(params){
    if (!params) params = {};
    
  }goToGatilhos(params){
    if (!params) params = {};
    this.navCtrl.push(GatilhosPage);
  }
}
