    import { DiasSemana } from "../enums/diasSemana";
    import { Detalhes } from "./IAlimento";

    export interface IDietaDetalhes extends Detalhes {
    }

    export interface IAlimentoDieta {
        alimentoId: string;
        nome?: string;
        preparo?: string;
        porcao: number;
        quantidade: number;
        categoriaCodigo: Number;
        detalhes: Detalhes;
    }

    export interface IAlimentoGrupo{
        alimentoId: string;
        porcao: number;
        quantidade: number
    }

    export interface IGrupo {
        _id?: string;
        nome: string;
        alimentos: IAlimentoDieta[];
    }

    export interface IDietaFixa {
        _id?: string;
        usuarioId?: string;
        diaSemana: DiasSemana[] | DiasSemana;
        criadoEm?: Date;
        atualizadoEm?: Date | null;
        removidoEm?: Date | null;
        detalhes?: IDietaDetalhes;
        grupos: IGrupo[];
    }