import { Component, OnInit } from '@angular/core';
import {Banco} from './banco';
import {BancoService} from '../../servicios/servicio-banco/banco.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css']
})
export class BancoComponent implements OnInit {

  public bancos: Banco[] = [];

  constructor(private bancoServicio: BancoService) { }

  ngOnInit(): void {
    this.listarBancos();
  }

  public listarBancos(): void{
    this.bancoServicio.listarBancos().subscribe(
      (response: Banco[]) => {
        this.bancos = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal( mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add'){
      button.setAttribute('data-bs-target', '#addEmployeeModal');
    }
    // @ts-ignore
    container.appendChild(button);
    button.click();
  }
}
