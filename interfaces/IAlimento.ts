import ICategoria from './ICategoria';

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
    categoria: ICategoria;
    porcao: number;
    detalhes: Detalhes;
}

export { IAlimento, Detalhes };
