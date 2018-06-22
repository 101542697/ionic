import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CategoriaPage } from '../pages/categoria/categoria';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, parametro: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, parametro: "" },
      { title: 'snaks', component: CategoriaPage, parametro: "snack"},
      { title: 'licores', component: CategoriaPage, parametro: "licores"},
      { title: 'farmacia', component: CategoriaPage, parametro: "farmacia"}
    ]

  }

  initializeApp() {
    
  }

  openPage(page) {

    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenari'
    this.nav.setRoot(page.component,{ "page": page});
  }
}
