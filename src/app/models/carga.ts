import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class Carga { 
  
  private responsavel: string;
  private carga: number;
  private data: any;

  constructor(responsavel: string, carga: number, data: any) {
    this.responsavel = responsavel;
    this.carga = carga;
    this.data = data;
  }

  public get getResponsavel(): string {
    return this.responsavel;
  }

  
  public get getCarga(): number {
    return this.carga;
  }

  public get getData(): any {
    return this.data;
  }

  public set setResponsavel(responsavel: string) {
    this.responsavel = responsavel;
  }

  public set setCarga(carga: number) {
    this.carga = carga;
  }

  public set setData(data: any) {
    this.data = data;
  }
}
