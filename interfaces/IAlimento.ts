interface Detalhes {
    valorEnergetico: number;
    proteinas: number;
    carboidratos: number;
    fibras: number;
    lipidios: number;
}

interface IAlimento {
    _id: string;
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

export { IAlimento, Detalhes };