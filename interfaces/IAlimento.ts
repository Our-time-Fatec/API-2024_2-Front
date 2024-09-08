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
    categoriaUrl: string;
    porcao: number;
    categoriaNome: string;
    detalhes: Detalhes;
}

export { IAlimento, Detalhes };