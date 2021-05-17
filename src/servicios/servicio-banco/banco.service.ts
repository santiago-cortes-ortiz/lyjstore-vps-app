import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Banco} from '../../app/banco/banco';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  private urlBackendBanco: string = environment.apiBackendUrl;

  constructor(private http: HttpClient) { }

  public listarBancos(): Observable<Banco[]> {
    return this.http.get<Banco[]>(`${this.urlBackendBanco}/banco/listar`);
  }

  public adicionarBanco(banco: Banco, id: number): Observable<Banco> {
    return this.http.put<Banco>(`${this.urlBackendBanco}/banco/${id}`, banco);
  }

}
