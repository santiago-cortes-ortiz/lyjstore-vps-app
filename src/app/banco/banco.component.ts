import { Component, OnInit } from '@angular/core';
import {Banco} from './banco';
import {BancoService} from '../../servicios/servicio-banco/banco.service';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';

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
    if (mode === 'agregar'){
      button.setAttribute('data-bs-target', '#adicionarEmpleado');
    }
    // @ts-ignore
    container.appendChild(button);
    button.click();
  }

  public adicionarBanco(formulario: NgForm): void{
    // @ts-ignore
    document.getElementById('adicionar-banco-form').click();
    // @ts-ignore
    this.bancoServicio.adicionarBanco(formulario.value, 0)
      .subscribe(
        (response: Banco) => {
          console.log(response);
          this.listarBancos();
          },
        (error: HttpErrorResponse) => { alert(error.message); }
      );
  }


}
