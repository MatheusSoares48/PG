import React, { useState } from 'react';
import { createCategoria, updateCategoria } from '../services/Service';

function CategoriaForm({ categoriaToUpdate }) {
    const [nome, setNome] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (categoriaToUpdate) {
                await updateCategoria(categoriaToUpdate.id, { nome });
            } else {
                await createCategoria({ nome });
            }
            alert('Categoria criada/editada com sucesso!');
            setNome('');
        } catch (error) {
            console.error('Erro ao criar/editar categoria:', error);
        }
    };

    return (
        <div>
            <h1>{categoriaToUpdate ? 'Editar Categoria' : 'Criar Categoria'}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                <button type="submit">{categoriaToUpdate ? 'Atualizar' : 'Criar'}</button>
            </form>
        </div>
    );
}

export default CategoriaForm;

