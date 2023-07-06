import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {
  clientes = [
    { nome: 'João', sobrenome: 'Silva' },
    { nome: 'Maria', sobrenome: 'Santos' },
    // Adicione mais clientes aqui
  ];
}
