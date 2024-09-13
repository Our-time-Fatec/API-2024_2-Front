import { useState, useEffect, useCallback } from 'react';
import { requestWithRefresh } from '../services/api';
import { IAlimento } from '../interfaces/IAlimento';
import ICategoria from '../interfaces/ICategoria';

const useAlimentos = (searchTerm: string) => {
    const [alimentos, setAlimentos] = useState<IAlimento[]>([]);
    const [categorias, setCategorias] = useState<ICategoria[]>([]);
    const [selectedCategoria, setSelectedCategoria] = useState<string>('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchCategorias = useCallback(async () => {
        try {
            const response = await requestWithRefresh({
                method: 'GET',
                url: '/categoria',
            });
            setCategorias(response.data);
        } catch (error) {
            console.error('Erro ao buscar categorias:', error);
        }
    }, []);

    const fetchAlimentos = useCallback(async (pageNumber: number, categoriaCodigo: string, searchTerm: string) => {
        try {
            if (categoriaCodigo === 'todascategorias') { categoriaCodigo = '' }
            const response = await requestWithRefresh({
                method: 'GET',
                url: `/alimento?page=${pageNumber}&limit=10${categoriaCodigo ? `&categoriaCodigo=${categoriaCodigo}` : ''}${searchTerm ? `&searchTerm=${searchTerm}` : ''}`,
            });
            setAlimentos(response.data.alimentosComCategoria);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Erro ao buscar alimentos:', error);
        }
    }, []);

    useEffect(() => {
        fetchCategorias();
    }, [fetchCategorias]);

    useEffect(() => {
        setPage(1);
        fetchAlimentos(1, selectedCategoria, searchTerm);
    }, [searchTerm, selectedCategoria, fetchAlimentos]);

    useEffect(() => {
        if (page > 1) {
            fetchAlimentos(page, selectedCategoria, searchTerm);
        }
    }, [page, selectedCategoria, searchTerm, fetchAlimentos]);

    const loadMore = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    return { alimentos, categorias, selectedCategoria, setSelectedCategoria, page, totalPages, loadMore };
};

export default useAlimentos;
