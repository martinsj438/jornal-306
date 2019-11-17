/**
* Ionic 4 Firebase Email Auth
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
  {
    title: 'Home',
    url: '/tab1',
    icon: 'home'
  },
  {
    title: 'Esportes',
    url: '/esporte',
    icon: 'football'
  },
  {
    title: 'Negócios',
    url: '/negocio',
    icon: 'ios-briefcase'
  },
  {
    title: 'Tecnologia',
    url: '/technologia',
    icon: 'laptop'
  },
  {
    title: 'Saúde',
    url: '/saude',
    icon: 'heart'
  },
  {
    title: 'Perfil',
    url: '/home',
    icon: 'person'
  },
  {
    title: 'Fale conosco',
    url: '/fale-conosco',
    icon: 'chatbubbles'
  },
];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
