import { Component, OnInit } from '@angular/core';

import { UsuarioLogadoService } from './../services/usuario-logado.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private LOGO_MENU = '../../assets/images/LogoHeaderW.png';

  constructor(private usuarioLogado: UsuarioLogadoService) {
    console.log(this.usuarioLogado);
  }

  ngOnInit() {
  }

  logout(): void {
    this.usuarioLogado.logout();
  }
}
