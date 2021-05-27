import { Component, OnInit } from '@angular/core';
import {EmpleadoService} from '../../servicios/servicio-empleado/empleado.service';
import {Empleado} from './empleado';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {FormaDePago} from '../formadepago/FormaDePago';
import {FormadepagoService} from '../../servicios/servicio-formadepago/formadepago.service';
import {Banco} from '../banco/banco';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  public empleados: Empleado[] = [];

  public empleadoAEliminar: Empleado;

  public formasDePago: FormaDePago[] = [];

  constructor(private empleadoServicio: EmpleadoService, private formaDePagoServicio: FormadepagoService) { }

  ngOnInit(): void {
    this.listarEmpleados();
    this.listarFormasDePago();
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

  public listarFormasDePago(): void{
    this.formaDePagoServicio.listarFormasDePago().subscribe(
      (response: FormaDePago[]) => {
        this.formasDePago = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public buscarEmpleados(key: string): void{
    const resultados: Empleado[] = [];
    for (const empleado of this.empleados){
      if (empleado.nombre.indexOf(key) !== -1
        || empleado.correoElectronico.indexOf(key) !== -1
      ){
        resultados.push(empleado);
      }
    }
    this.empleados = resultados;
    if (resultados.length === 0 || !key){
      this.listarEmpleados();
    }
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
      this.empleadoAEliminar = empleado;
      button.setAttribute('data-bs-target', '#eliminarEmpleadoPorId');
    }
    // @ts-ignore
    container.appendChild(button);
    button.click();
  }

  public adicionarEmpleado(formulario: NgForm): void{
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

  public eliminarEmpleadoPorId(idEmpleado: number): void{
    this.empleadoServicio.eliminarEmpleadoPorId(idEmpleado)
      .subscribe(
        (response: void) => {
          console.log(response);
          this.listarEmpleados();
        },
        (error: HttpErrorResponse) => {
          alert('Hay una referencia hacia la tabla usuarios master');
        }
      );
  }

}
