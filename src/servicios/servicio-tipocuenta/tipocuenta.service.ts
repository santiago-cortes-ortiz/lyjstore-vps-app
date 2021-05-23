import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {TipoDeCuenta} from '../../app/modelos/tipoDeCuenta';

@Injectable({
  providedIn: 'root'
})
export class TipocuentaService {

  private urlBanckendTipoDeCuenta: string = environment.apiBackendUrl;

  constructor(private http: HttpClient) { }

  public listarTipoDeCuenta(): Observable<TipoDeCuenta[]>{
    return this.http.get<TipoDeCuenta[]>(`${this.urlBanckendTipoDeCuenta}/tipodecuenta/listar`);
  }

}
