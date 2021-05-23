import {Banco} from '../banco/banco';
import {TipoDeCuenta} from '../modelos/tipoDeCuenta';

export interface FormaDePago{
  id: number;
  numeroPagos: number;
  idBanco: number;
  idTipoDeCuenta: number;
  banco: Banco;
  tipoDeCuenta: TipoDeCuenta;
}
