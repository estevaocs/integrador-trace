import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogsComponent } from './logs/logs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { UsuarioLogadoService } from './services/usuario-logado.service';

import { routing } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConfiguracoesComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    LogsComponent,
    PageNotFoundComponent,
    DashboardComponent
  ],
  imports: [
    routing,
    BrowserModule
  ],
  providers: [ UsuarioLogadoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
