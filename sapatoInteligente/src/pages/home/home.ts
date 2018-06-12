import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MonitorarPage } from '../monitorar/monitorar';
import { SincronizarPage } from '../sincronizar/sincronizar';
import { Sincronizar2Page } from '../sincronizar2/sincronizar2';
import { GatilhosPage } from '../gatilhos/gatilhos';
import { Gatilhos2Page } from '../gatilhos2/gatilhos2';
import { HistRicoPage } from '../hist-rico/hist-rico';
import { HistRico2Page } from '../hist-rico2/hist-rico2';
import { HistRico3Page } from '../hist-rico3/hist-rico3';
import { NotificaEsPage } from '../notifica-es/notifica-es';
import { DetalheNotificaOPage } from '../detalhe-notifica-o/detalhe-notifica-o';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  goToMonitorar(params){
    if (!params) params = {};
    this.navCtrl.push(MonitorarPage);
  }goToSincronizar(params){
    if (!params) params = {};
    this.navCtrl.push(SincronizarPage);
  }goToSincronizar2(params){
    if (!params) params = {};
    this.navCtrl.push(Sincronizar2Page);
  }goToGatilhos(params){
    if (!params) params = {};
    this.navCtrl.push(GatilhosPage);
  }goToGatilhos2(params){
    if (!params) params = {};
    this.navCtrl.push(Gatilhos2Page);
  }goToHistRico(params){
    if (!params) params = {};
    this.navCtrl.push(HistRicoPage);
  }goToHistRico2(params){
    if (!params) params = {};
    this.navCtrl.push(HistRico2Page);
  }goToHistRico3(params){
    if (!params) params = {};
    this.navCtrl.push(HistRico3Page);
  }goToNotificaEs(params){
    if (!params) params = {};
    this.navCtrl.push(NotificaEsPage);
  }goToDetalheNotificaO(params){
    if (!params) params = {};
    this.navCtrl.push(DetalheNotificaOPage);
  }
}
