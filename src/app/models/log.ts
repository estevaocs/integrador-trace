import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class Log {

  private id: number;
  private descricao: string;
  private data: any;
  private usuarioCode: number;

  constructor(id: number, descricao: string, data: any, usuarioCode: number) {
    this.id = id;
    this.descricao = descricao;
    this.data = data;
    this.usuarioCode = usuarioCode;
  }

  get getId(): number {
    return this.id;
  }

  get getDescricao(): string {
    return this.descricao;
  }

  get getData(): any {
    return this.data;
  }

  get getUsuario(): number {
    return this.usuarioCode;
  }
}
