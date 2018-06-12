import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalheNotificaOPage } from '../detalhe-notifica-o/detalhe-notifica-o';

@Component({
  selector: 'page-notifica-es',
  templateUrl: 'notifica-es.html'
})
export class NotificaEsPage {

  constructor(public navCtrl: NavController) {
  }
  goToDetalheNotificaO(params){
    if (!params) params = {};
    this.navCtrl.push(DetalheNotificaOPage);
  }
}
