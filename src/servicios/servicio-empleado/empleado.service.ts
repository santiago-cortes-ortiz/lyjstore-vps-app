import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Banco} from '../../app/banco/banco';
import {Empleado} from '../../app/empleado/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private urlBackendEmpleado: string = environment.apiBackendUrl;

  constructor(private http: HttpClient) { }

  public listarEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(`${this.urlBackendEmpleado}/empleado/listar`);
  }

  public adicionarEmpleado(empleado: Empleado, id: number): Observable<Empleado> {
    return this.http.put<Empleado>(`${this.urlBackendEmpleado}/empleado/${id}`, empleado);
  }

  public eliminarEmpleadoPorId(idEmpleado: number): Observable<void>{
    return this.http.delete<void>(`${this.urlBackendEmpleado}/empleado/${idEmpleado}`);
  }

}
