import { Component, OnInit } from '@angular/core';
import {EmpleadoService} from '../../servicios/servicio-empleado/empleado.service';
import {Empleado} from './empleado';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  public empleados: Empleado[] = [];

  constructor(private empleadoServicio: EmpleadoService) { }

  ngOnInit(): void {
    this.listarEmpleados();
  }

  public listarEmpleados(): void{
    this.empleadoServicio.listarEmpleados().subscribe(
      (response: Empleado[]) => {
        this.empleados = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(empleado: Empleado, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'agregar'){
      button.setAttribute('data-bs-target', '#adicionarEmpleado');
    }
    if (mode === 'modificar'){
      button.setAttribute('data-bs-target', '#modificarEmpleado');
    }
    if (mode === 'eliminar'){
      button.setAttribute('data-bs-target', '#eliminarEmpleadoPorId');
    }
    // @ts-ignore
    container.appendChild(button);
    button.click();
  }

  public adicionarEmpleado(formulario: NgForm): void{
    // @ts-ignore
    document.getElementById('adicionar-empleado-form').click();
    // @ts-ignore
    this.empleadoServicio.adicionarEmpleado(formulario.value, 0)
      .subscribe(
        (response: Empleado) => {
          console.log(response);
          this.listarEmpleados();
          formulario.reset();
        },
        (error: HttpErrorResponse) => { alert(error.message); }
      );
  }

  /*public actualizarEmpleado(empleado: Empleado): void{
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
  }*/

}
