    import { DiasSemana } from "../enums/diasSemana";
    import { Detalhes, IAlimento } from "./IAlimento";

    export interface IDietaDetalhes extends Detalhes {
    }

    export interface IAlimentoDieta {
        alimentoId: string;
        nome?: string;
        preparo?: string;
        porcao: number;
        quantidade: number;
        categoriaCodigo?: Number;
        detalhes?: Detalhes;
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

    export interface IDietaDiaria {
        usuarioId: string;
        diaSemana: DiasSemana;
        dia: Date;
        detalhes: IDietaDetalhes;
        grupos: IGrupo[];
        removidoEm?: Date | null
        gruposConsumo: IGrupoConsumo[]
    }
    
    export interface IGrupoConsumo {
        _id: string;
        nome: string,
        alimentosConsumidos: IAlimento[];
    }

    export interface IDietaDiariaHook{
        usuarioId: string,
        diaSemana:DiasSemana,
        dia: Date,
        gruposConsumo: IGrupoConsumoHook[]
    }

    export interface IGrupoConsumoHook {
        _id: string;
        nome: string;
        alimentos?: IContagem[]; // Esta propriedade é do tipo IContagem[]
        alimentosConsumidos: IContagem[]; // Consumo de alimentos
    }

   export interface IContagem{
        consumido: number,
        paraConsumir: number,
        alimento: IAlimento
    }