import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface IItemMenuNavegacao {
  titulo: string,
  rota: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  public itensMenuNavegacao: IItemMenuNavegacao[] = [
    {
      titulo: 'Funcionários',
      rota: '/funcionarios'
    },
    {
      titulo: 'Clientes',
      rota: '/clientes'
    },
    {
      titulo: 'Pets',
      rota: '/pets'
    },
    {
      titulo: 'Serviços',
      rota: '/servicos'
    },
  ];
  private rotaAtual: string = '';

  constructor(private router: Router) {}
  
  ngOnInit(): void {
    this.rotaAtual = this.router.url;
  }

  public selecionado(item: string) {
    return this.rotaAtual === item
      ? {'color': 'var(--selected-menu-item)', 'font-weight': '700'}
      : {};
  }
}
