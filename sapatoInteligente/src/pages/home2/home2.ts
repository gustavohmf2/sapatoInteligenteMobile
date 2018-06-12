import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SincronizarPage } from '../sincronizar/sincronizar';
import { Sincronizar2Page } from '../sincronizar2/sincronizar2';
import { HistRicoPage } from '../hist-rico/hist-rico';
import { HistRico2Page } from '../hist-rico2/hist-rico2';
import { HistRico3Page } from '../hist-rico3/hist-rico3';
import { GatilhosPage } from '../gatilhos/gatilhos';
import { Gatilhos2Page } from '../gatilhos2/gatilhos2';
import { MonitorarPage } from '../monitorar/monitorar';
import { NotificaEsPage } from '../notifica-es/notifica-es';
import { DetalheNotificaOPage } from '../detalhe-notifica-o/detalhe-notifica-o';

@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html'
})
export class Home2Page {

  constructor(public navCtrl: NavController) {
  }
  goToSincronizar(params){
    if (!params) params = {};
    this.navCtrl.push(SincronizarPage);
  }goToSincronizar2(params){
    if (!params) params = {};
    this.navCtrl.push(Sincronizar2Page);
  }goToHistRico(params){
    if (!params) params = {};
    this.navCtrl.push(HistRicoPage);
  }goToHistRico2(params){
    if (!params) params = {};
    this.navCtrl.push(HistRico2Page);
  }goToHistRico3(params){
    if (!params) params = {};
    this.navCtrl.push(HistRico3Page);
  }goToGatilhos(params){
    if (!params) params = {};
    this.navCtrl.push(GatilhosPage);
  }goToGatilhos2(params){
    if (!params) params = {};
    this.navCtrl.push(Gatilhos2Page);
  }goToMonitorar(params){
    if (!params) params = {};
    this.navCtrl.push(MonitorarPage);
  }goToNotificaEs(params){
    if (!params) params = {};
    this.navCtrl.push(NotificaEsPage);
  }goToDetalheNotificaO(params){
    if (!params) params = {};
    this.navCtrl.push(DetalheNotificaOPage);
  }
}
