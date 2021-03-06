import {Component, Input, OnInit} from '@angular/core';
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

  public bancoAEditar: Banco = null;

  public bancoAEliminar: Banco;

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

  public onOpenModal(banco: Banco, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'agregar'){
      button.setAttribute('data-bs-target', '#adicionarBanco');
    }
    if (mode === 'modificar'){
      this.bancoAEditar = banco;
      button.setAttribute('data-bs-target', '#modificarBanco');
    }
    if (mode === 'eliminar'){
      this.bancoAEliminar = banco;
      button.setAttribute('data-bs-target', '#eliminarBancoPorId');
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
          formulario.reset();
          },
        (error: HttpErrorResponse) => { alert(error.message); }
      );
  }

  public actualizarBanco(banco: Banco): void{
    const idBanco = this.bancoAEditar.id;
    this.bancoServicio.adicionarBanco(banco, idBanco)
      .subscribe(
        (response: Banco) => {
          console.log(response);
          this.listarBancos();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }

  public buscarBanco(key: string): void{
    const resultados: Banco[] = [];
    for (const banco of this.bancos){
      if (banco.nombre.indexOf(key) !== -1){
        resultados.push(banco);
      }
    }
    this.bancos = resultados;
    if (resultados.length === 0 || !key){
      this.listarBancos();
    }
  }

  public eliminarBancoPorId(idBanco: number): void{
    this.bancoServicio.eliminarBancoPorId(idBanco)
      .subscribe(
        (response: void) => {
          console.log(response);
          this.listarBancos();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }



}
