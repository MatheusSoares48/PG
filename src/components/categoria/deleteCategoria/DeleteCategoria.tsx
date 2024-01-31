import React from 'react';
import { deleteCategoria } from '../services/Service';

function DeleteCategoria({ id }) {
    const handleDelete = async () => {
        try {
            await deleteCategoria(id);
            alert('Categoria deletada com sucesso!');
        } catch (error) {
            console.error('Erro ao deletar categoria:', error);
        }
    };

    return (
        <div>
            <button onClick={handleDelete}>Deletar Categoria</button>
        </div>
    );
}

export default DeleteCategoria;
