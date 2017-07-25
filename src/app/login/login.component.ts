import { Component, OnInit } from '@angular/core';

import { UsuarioLogadoService } from './../services/usuario-logado.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private TITULO: string;
  private resume: string;
  private LOGO_ITSS_BI = '../../assets/images/LogoITSSBIAnalytics.png';
  private usuarioLogado: UsuarioLogadoService;

  constructor() {
    this.usuarioLogado = new UsuarioLogadoService;
   }

  ngOnInit() {
    this.TITULO = 'Integração Trace';
    this.resume = `Acompanhamento e integração das demandas do Trace GP.`;
  }

  login(usuario: string, senha: string): void {
    this.usuarioLogado.login(usuario, senha);
  }
}
