import React, { useState, useEffect } from 'react';
import { getAllCategorias } from '../../../services/Service';
import Categoria from '../../../models/Categoria';

function GetAllCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]); // Especificando o tipo de estado inicial como Categoria[]

    useEffect(() => {
        async function fetchData() {
            const data = await getAllCategorias();
            setCategorias(data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Todas as Categorias</h1>
            <ul>
                {categorias.map((categoria) => (
                    <li key={categoria.id}>{categoria.descricao}</li> {/* Ajuste para utilizar a propriedade 'descricao' da Categoria */}
                ))}
            </ul>
        </div>
    );
}

export default GetAllCategorias;



