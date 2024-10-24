import { DiasSemana } from '../enums/diasSemana'; // Enum DiasSemana que você mencionou
import { Detalhes as IAlimentoDetalhes } from './IAlimento';

export interface IAlimentoConsumido {
  alimentoId: string;
  porcao: number;
  nome: string;
  criadoEm: string;
  consumido: number;
  detalhes: IAlimentoDetalhes;
}

export interface IDiaTotal {
  valorEnergetico: number;
  lipidios: number;
  proteinas: number;
  carboidratos: number;
  fibras: number;
}

export interface IDiaAlimentos {
  dia: Date;
  total: IDiaTotal;
  alimentos: IAlimentoConsumido[];
}

export interface IDietaSemanal {
  [DiasSemana.Domingo]: IDiaAlimentos; // Domingo é obrigatório
  [DiasSemana.Segunda]?: IDiaAlimentos; // Os outros dias são opcionais
  [DiasSemana.Terca]?: IDiaAlimentos;
  [DiasSemana.Quarta]?: IDiaAlimentos;
  [DiasSemana.Quinta]?: IDiaAlimentos;
  [DiasSemana.Sexta]?: IDiaAlimentos;
  [DiasSemana.Sabado]?: IDiaAlimentos;
}
