import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormaDePago} from '../../app/formadepago/FormaDePago';

@Injectable({
  providedIn: 'root'
})
export class FormadepagoService {

  private urlBanckendFormaDePago: string = environment.apiBackendUrl;

  constructor(private http: HttpClient) { }

  public listarFormasDePago(): Observable<FormaDePago[]>{
    return this.http.get<FormaDePago[]>(`${this.urlBanckendFormaDePago}/formadepago/listar`);
  }

  public adicionarFormaDePago(formaDePago: FormaDePago, id: number): Observable<FormaDePago>{
    return this.http.put<FormaDePago>(`${this.urlBanckendFormaDePago}/formadepago/${id}`, formaDePago);
  }

}
