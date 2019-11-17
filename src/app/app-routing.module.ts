/**
* Ionic 4 Firebase Email Auth
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'forgot', loadChildren: './forgot/forgot.module#ForgotPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'saude', loadChildren: './saude/saude.module#SaudePageModule' },
  { path: 'technologia', loadChildren: './technologia/technologia.module#TechnologiaPageModule' },
  { path: 'esporte', loadChildren: './esporte/esporte.module#EsportePageModule' },
  { path: 'negocio', loadChildren: './negocio/negocio.module#NegocioPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'fale-conosco', loadChildren: './fale-conosco/fale-conosco.module#FaleConoscoPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
