import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';

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
                <div>
                    <label>
                        Nome da Categoria:
                        <input type="text"
                            name="nome"
                            value={valores.nome}
                            onChange={handleChange} />
                    </label>
                </div>

                <div>
                    <label>
                        Descrição:
                        <textarea type="text"
                            name="descricao"
                            value={valores.descricao}
                            onChange={handleChange}>
                        </textarea>
                    </label>
                </div>

                <div>
                    <label>
                        Cor:
                        <input type="color"
                            name="cor"
                            value={valores.cor}
                            onChange={handleChange} />
                    </label>
                </div>
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
