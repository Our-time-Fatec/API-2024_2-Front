import { DiasSemana } from "../enums/diasSemana";
import { Detalhes } from "./IAlimento";

export interface IDietaDetalhes extends Detalhes {
}

export interface IAlimentoDieta {
    _id?: string;
    nome: string;
    preparo: string;
    porcao: Number;
    quantidade: number;
    categoriaCodigo: Number;
    detalhes: Detalhes;
}

export interface IGrupo {
    _id?: string;
    nome: string;
    alimentos: IAlimentoDieta[];
}

export interface IDietaFixa extends Document {
    _id?: string;
    usuarioId: string;
    diaSemana: DiasSemana;
    criadoEm: Date;
    atualizadoEm?: Date | null;
    removidoEm?: Date | null;
    detalhes: IDietaDetalhes;
    grupos: IGrupo[];
}