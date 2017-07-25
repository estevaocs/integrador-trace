import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class Usuario {
  private id: number;
  private name: string;
  private pass: string;
  private lastAcess: any;

  constructor(id: number, name: string, pass: string, ) {
    this.id = id;
    this.name = name;
    this.pass = pass;
  }

  public get getId(): number {
    return this.id;
  }

  public get getName(): string {
    return this.name;
  }

  public get getLastAcess(): any {
    return this.lastAcess;
  }

  public set setPass(pass: string) {
    this.pass = pass;
  }
}
