import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  redirectToProdutos() {
    this.router.navigate(['/produtos']);
  }

  redirectToClientes() {
    this.router.navigate(['/clientes']);
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

}
