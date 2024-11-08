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
            categoriaCodigo?: number;
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
            gruposConsumo: IGrupoConsumo[];
        }
        
        // Interface representando um grupo de consumo
        export interface IGrupoConsumo {
            _id: string;
            grupo: string;  
            alimentos: IContagem[]; 
        }
    
        export interface IContagem {
            consumido: number;
            paraConsumir: number;
            alimento: IAlimentoConsumo; // Referência à interface IAlimento
        }

        interface IAlimentoConsumo {
            _id: string,
            alimentoId: string;
            nome: string;
            preparo: string;
            categoriaUrl?: string;
            porcao: number;
            quantidade?: number;
            categoriaNome?: string;
            categoriaCodigo: number;
            detalhes: Detalhes;
            criadoEm?: Date;
            nomeGrupo?: string,
        }