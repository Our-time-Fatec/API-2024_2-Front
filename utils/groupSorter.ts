import { IGrupo } from "../interfaces/IDieta";

class GroupSorter{
    public sorter = (grupos: IGrupo[]): IGrupo[] => {
        const ORDEM_GRUPOS = ["Café da Manhã", "Almoço", "Café da Tarde", "Janta"];

        return grupos.sort((a, b) => {
            const indiceA = ORDEM_GRUPOS.indexOf(a.nome);
            const indiceB = ORDEM_GRUPOS.indexOf(b.nome);
            return indiceA - indiceB;
        });
    }
}

export default new GroupSorter()    