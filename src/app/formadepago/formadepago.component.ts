import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {TipocuentaService} from '../../servicios/servicio-tipocuenta/tipocuenta.service';
import {FormadepagoService} from '../../servicios/servicio-formadepago/formadepago.service';
import {TipoDeCuenta} from '../modelos/tipoDeCuenta';
import {HttpErrorResponse} from '@angular/common/http';
import {BancoComponent} from '../banco/banco.component';
import {Banco} from '../banco/banco';
import {BancoService} from '../../servicios/servicio-banco/banco.service';

@Component({
  selector: 'app-formadepago',
  templateUrl: './formadepago.component.html',
  styleUrls: ['./formadepago.component.css']
})
export class FormadepagoComponent implements OnInit {

  public tiposDeCuenta: TipoDeCuenta[] = [];

  public bancos: Banco[] = [];

  constructor(private servicioTipoDeCuenta: TipocuentaService, private servicioFormaDePago: FormadepagoService,
              private servicioBanco: BancoService) {
  }

  ngOnInit(): void {
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



}
