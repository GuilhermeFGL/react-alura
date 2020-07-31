import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    };
    const [categorias, setCategorias] = useState([]);
    const [valores, setValores] = useState(valoresIniciais);

    function handleChange(evento) {
        setValores({
            ...valores,
            [evento.target.getAttribute('name')]: evento.target.value
        });
    }

    return (
        <PageDefault>
            <h1>Página de Cadastro de Categoria: {valores.nome}</h1>

            <form onSubmit={function handleSubmit(evento) {
                evento.preventDefault();
                setCategorias([
                    ...categorias,
                    valores
                ]);
                setValores(valoresIniciais);
            }}>

                <FormField
                    label={"Nome da Categoria"}
                    type={"text"}
                    name={"nome"}
                    value={valores.nome}
                    onChange={handleChange} />

                <FormField
                    label={"Descrição"}
                    type={"text"}
                    name={"descricao"}
                    value={valores.descricao}
                    onChange={handleChange} />
                
                <FormField
                    label={"Cor"}
                    type={"color"}
                    name={"cor"}
                    value={valores.cor}
                    onChange={handleChange} />

                <button>Cadastrar</button>
            </form>

            <ul>
                {categorias.map((categoria, index) => {
                    return (
                        <li key={index}>{categoria.nome}</li>
                    )
                })}
            </ul>

        </PageDefault>
    );
}

export default CadastroCategoria;
