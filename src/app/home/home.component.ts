import { Usuario } from './../models/usuario';
import { Component, OnInit } from '@angular/core';

import { UsuarioLogadoService } from './../services/usuario-logado.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  responsavel:string;
  carga:number;
  data:string;

  constructor(private usuarioLogado: UsuarioLogadoService) { }

  ngOnInit() {
    this.responsavel = 'Automático';
    this.carga= 6500;
    this.data='18/07/2017 13:00';
    
    if(this.usuarioLogado.getUsuario() === null) {

    }

  }

  forcaCarga() {
    console.log('carga efetuada');
  }

}
