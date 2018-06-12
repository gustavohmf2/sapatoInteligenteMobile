import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Sincronizar2Page } from '../sincronizar2/sincronizar2';

@Component({
  selector: 'page-sincronizar',
  templateUrl: 'sincronizar.html'
})
export class SincronizarPage {

  constructor(public navCtrl: NavController) {
  }
  goToSincronizar2(params){
    if (!params) params = {};
    this.navCtrl.push(Sincronizar2Page);
  }
}
