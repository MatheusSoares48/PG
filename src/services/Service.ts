import axios from 'axios';

const API_URL = 'https://farmacia-ug0p.onrender.com';

interface Categoria {
    nome: string;
}

export const getAllCategorias = async () => {
    const response = await axios.get<Categoria[]>(`${API_URL}/categorias`);
    return response.data;
};

export const createCategoria = async (categoria: Categoria) => {
    const response = await axios.post<Categoria>(`${API_URL}/categorias`, categoria);
    return response.data;
};

export const updateCategoria = async (id: string, categoria: Categoria) => {
    const response = await axios.put<Categoria>(`${API_URL}/categorias/${id}`, categoria);
    return response.data;
};

export const deleteCategoria = async (id: string) => {
    await axios.delete(`${API_URL}/categorias/${id}`);
};


