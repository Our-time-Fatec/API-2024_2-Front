import React, { useEffect } from 'react';
import renderer, { act } from 'react-test-renderer';
import useAlimentos from '../../hooks/useAlimentos';
import { requestWithRefresh } from '../../services/api';
import { IAlimento } from '../../interfaces/IAlimento';
import ICategoria from '../../interfaces/ICategoria';

// Mock do serviço de API
jest.mock('../../services/api');

const mockCategorias: ICategoria[] = [
  {
      codigo: 1, nome: 'Frutas',
      _id: '',
      urlPlaceholder: ''
  },
  {
      codigo: 2, nome: 'Verduras',
      _id: '',
      urlPlaceholder: ''
  },
];

const mockAlimentos: IAlimento[] = [
  { _id: '1', nome: 'Banana', porcao: 100, preparo: 'In Natura', categoriaNome: 'Frutas', categoriaUrl: '', criadoEm: new Date(), quantidade: 2, nomeGrupo: 'Café da Manhã', detalhes: { valorEnergetico: 89, carboidratos: 22.8, proteinas: 1.1, fibras: 2.6, lipidios: 0.3 }, categoriaCodigo: 0 },
  { _id: '2', nome: 'Maçã', porcao: 150, preparo: 'In Natura', categoriaNome: 'Frutas', categoriaUrl: '', criadoEm: new Date(), quantidade: 1, nomeGrupo: 'Lanche', detalhes: { valorEnergetico: 52, carboidratos: 14, proteinas: 0.3, fibras: 2.4, lipidios: 0.2 }, categoriaCodigo: 0 },
];

const TestComponent = ({ searchTerm, onlyUser }: { searchTerm: string, onlyUser?: boolean }) => {
  const {
    alimentos,
    categorias,
    selectedCategoria,
    setSelectedCategoria,
    page,
    totalPages,
    loadMore,
    refreshAlimentos,
  } = useAlimentos(searchTerm, onlyUser);

  useEffect(() => {
    refreshAlimentos();
  }, [refreshAlimentos]);

  return (
    <React.Fragment>
      <div data-testid="alimentos">{JSON.stringify(alimentos)}</div>
      <div data-testid="categorias">{JSON.stringify(categorias)}</div>
      <div data-testid="selectedCategoria">{selectedCategoria}</div>
      <button data-testid="loadMore" onClick={loadMore}>Load More</button>
      <button data-testid="setSelectedCategoria" onClick={() => setSelectedCategoria('1')}>Set Categoria</button>
    </React.Fragment>
  );
};


describe('useAlimentos', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve buscar categorias corretamente', async () => {
    (requestWithRefresh as jest.Mock).mockResolvedValueOnce({ data: mockCategorias });

    await act(async () => {
      renderer.create(<TestComponent searchTerm="" />);
    });

    expect(requestWithRefresh).toHaveBeenCalledWith({
      method: 'GET',
      url: '/categoria',
    });
  });

  it('deve buscar alimentos corretamente', async () => {
    (requestWithRefresh as jest.Mock).mockResolvedValueOnce({
      data: {
        alimentosComCategoria: mockAlimentos,
        totalPages: 1,
      },
    });

    await act(async () => {
      renderer.create(<TestComponent searchTerm="Banana" />);
    });

    expect(requestWithRefresh).toHaveBeenCalledWith({
      method: 'GET',
      url: '/alimento?page=1&limit=10&searchTerm=Banana',
    });
  });

  it('deve lidar com erro ao buscar categorias', async () => {
    (requestWithRefresh as jest.Mock).mockRejectedValueOnce(new Error('Erro ao buscar categorias'));

    await act(async () => {
      renderer.create(<TestComponent searchTerm="" />);
    });

    expect(requestWithRefresh).toHaveBeenCalledWith({
      method: 'GET',
      url: '/categoria',
    });
  });

  it('deve lidar com erro ao buscar alimentos', async () => {
    (requestWithRefresh as jest.Mock).mockRejectedValueOnce(new Error('Erro ao buscar alimentos'));

    await act(async () => {
      renderer.create(<TestComponent searchTerm="Banana" />);
    });

    expect(requestWithRefresh).toHaveBeenCalledWith({
      method: 'GET',
      url: '/alimento?page=1&limit=10&searchTerm=Banana',
    });
  });
});