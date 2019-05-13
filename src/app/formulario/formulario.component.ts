import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  nome:string;
  email:string;
  telefone:string;

  constructor() { }

  ngOnInit() {
  }

  exibeNaConsole() {
    console.log(`
      Nome: ${this.nome}
      Email: ${this.email}
      Telefone: ${this.telefone}
    `);
  }
}
