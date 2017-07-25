import { Usuario } from './../models/usuario';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioLogadoService {

  private usuario: Usuario;

  constructor() { }

  get getUsuario(): Usuario {
    return this.usuario;
  }

  login(usuario: string, pass: string ): void {
    this.usuario = new Usuario(1, usuario, pass);
  }

  logout(): void {
    this.usuario = null;
  }

}
