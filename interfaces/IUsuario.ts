import { Detalhes } from "./IAlimento";

export interface IUsuario {
    _id?: string;
    nome: string;
    sobrenome: string;
    email: string;
    senha?: string;
    confirmarSenha?: string;
    dataDeNascimento: Date;
    idade?: number;
    peso: number;
    altura: number;
    nivelDeSedentarismo?: "Sedentário" | "Levemente ativo" | "Moderadamente ativo" | "Altamente ativo" | "Extremamente ativo";
    sexo?: "Masculino" | "Feminino";
    objetivo?: "Dieta de emagrecimento" | "Dieta de Ganho de Massa Muscular" | "Dieta Low Carb";
    IMC?: number;
    taxaMetabolismoBasal?: number;
    gastoDeCaloria?: number;
    consumoDeCaloriaPorDia?: number;
    ultimaVezUtilizado?: Date;
    criadoEm?: Date;
    atualizadoEm?: Date | null;
    removidoEm?: Date | null;
    totaisAlimentosConsumidos?: Detalhes;
    metaAgua?: number,
    agua?: IAgua
}

export interface IAgua {
    aguaIngerida: number
}
