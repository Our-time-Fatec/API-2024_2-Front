import { useState, useEffect, useCallback } from 'react';
import { requestWithRefresh } from '../services/api';
import { IAlimento } from '../interfaces/IAlimento';
import ICategoria from '../interfaces/ICategoria';

const useAlimentos = (searchTerm: string, onlyUser: boolean = false) => {
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

    const fetchAlimentos = useCallback(async (pageNumber: number, categoriaCodigo: string, searchTerm: string, onlyUser: boolean) => {
        try {
            if (categoriaCodigo === 'todascategorias') { categoriaCodigo = '' }
            const response = await requestWithRefresh({
                method: 'GET',
                url: `/alimento?page=${pageNumber}&limit=10${categoriaCodigo ? `&categoriaCodigo=${categoriaCodigo}` : ''}${searchTerm ? `&searchTerm=${searchTerm}` : ''}${onlyUser ? `&onlyUser=true` : ''}`,
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
        fetchAlimentos(page, selectedCategoria, searchTerm, onlyUser);
    }, [page, selectedCategoria, searchTerm, onlyUser, fetchAlimentos]);

    const loadMore = () => {
        if (page < totalPages) {
            setPage(prevPage => prevPage + 1);
        }
    };

   
    const refreshAlimentos = useCallback(() => {
        setPage(1);  
        fetchAlimentos(1, selectedCategoria, searchTerm, onlyUser);  
    }, [fetchAlimentos, selectedCategoria, searchTerm, onlyUser]);

    return {
        alimentos,
        categorias,
        selectedCategoria,
        setSelectedCategoria,
        page,
        totalPages,
        loadMore,
        refreshAlimentos, 
    };
};

export default useAlimentos;
