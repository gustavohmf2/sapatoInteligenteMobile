import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { Home2Page } from '../pages/home2/home2';
import { SincronizarPage } from '../pages/sincronizar/sincronizar';
import { Sincronizar2Page } from '../pages/sincronizar2/sincronizar2';
import { MonitorarPage } from '../pages/monitorar/monitorar';
import { GatilhosPage } from '../pages/gatilhos/gatilhos';
import { Gatilhos2Page } from '../pages/gatilhos2/gatilhos2';
import { HistRicoPage } from '../pages/hist-rico/hist-rico';
import { HistRico2Page } from '../pages/hist-rico2/hist-rico2';
import { HistRico3Page } from '../pages/hist-rico3/hist-rico3';
import { PesoPage } from '../pages/peso/peso';
import { PontosDePressOPage } from '../pages/pontos-de-press-o/pontos-de-press-o';
import { PercursoPage } from '../pages/percurso/percurso';
import { NotificaEsPage } from '../pages/notifica-es/notifica-es';
import { DetalheNotificaOPage } from '../pages/detalhe-notifica-o/detalhe-notifica-o';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CadastroPage,
    LoginPage,
    HomePage,
    Home2Page,
    SincronizarPage,
    Sincronizar2Page,
    MonitorarPage,
    GatilhosPage,
    Gatilhos2Page,
    HistRicoPage,
    HistRico2Page,
    HistRico3Page,
    PesoPage,
    PontosDePressOPage,
    PercursoPage,
    NotificaEsPage,
    DetalheNotificaOPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CadastroPage,
    LoginPage,
    HomePage,
    Home2Page,
    SincronizarPage,
    Sincronizar2Page,
    MonitorarPage,
    GatilhosPage,
    Gatilhos2Page,
    HistRicoPage,
    HistRico2Page,
    HistRico3Page,
    PesoPage,
    PontosDePressOPage,
    PercursoPage,
    NotificaEsPage,
    DetalheNotificaOPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}