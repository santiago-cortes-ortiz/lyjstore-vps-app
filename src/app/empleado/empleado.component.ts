import { Component, OnInit } from '@angular/core';
import {EmpleadoService} from '../../servicios/servicio-empleado/empleado.service';
import {Empleado} from './empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  public empleados: Empleado[] = [];

  constructor(private empleadoServicio: EmpleadoService) { }

  ngOnInit(): void {
  }

}
