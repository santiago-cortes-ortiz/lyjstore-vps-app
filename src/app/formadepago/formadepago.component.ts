import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {TipocuentaService} from '../../servicios/servicio-tipocuenta/tipocuenta.service';
import {FormadepagoService} from '../../servicios/servicio-formadepago/formadepago.service';
import {TipoDeCuenta} from '../modelos/tipoDeCuenta';
import {HttpErrorResponse} from '@angular/common/http';
import {Banco} from '../banco/banco';
import {BancoService} from '../../servicios/servicio-banco/banco.service';
import {FormaDePago} from './FormaDePago';

@Component({
  selector: 'app-formadepago',
  templateUrl: './formadepago.component.html',
  styleUrls: ['./formadepago.component.css']
})
export class FormadepagoComponent implements OnInit {

  public tiposDeCuenta: TipoDeCuenta[] = [];

  public bancos: Banco[] = [];

  public formasDePago: FormaDePago[] = [];

  constructor(private servicioTipoDeCuenta: TipocuentaService, private servicioFormaDePago: FormadepagoService,
              private servicioBanco: BancoService) {
  }

  ngOnInit(): void {
    this.darFormasDePago();
    this.darTiposDeCuenta();
    this.listarBancos();
  }

  public listarBancos(): void{
    this.servicioBanco.listarBancos().subscribe(
      (response: Banco[]) => {
        this.bancos = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // @ts-ignore
  public buscarNombreBancoPorId(id: number): string{
    for (const banco of this.bancos) {
      if (banco.id === id){
        return banco.nombre;
        break;
      }
    }
  }

  // @ts-ignore
  public buscarTipoDeCuentaPorId(id: number): string{
    for (const tipodecuenta of this.tiposDeCuenta) {
      if (tipodecuenta.id === id){
        return tipodecuenta.tipo;
        break;
      }
    }
  }


  public darTiposDeCuenta(): void{
    this.servicioTipoDeCuenta.listarTipoDeCuenta()
      .subscribe(
        (response) => {
          this.tiposDeCuenta = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }

  public darFormasDePago(): void{
    this.servicioFormaDePago.listarFormasDePago()
      .subscribe(
        (response) => {
          this.formasDePago = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }


}
