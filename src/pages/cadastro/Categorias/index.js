import React, { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  function handleChange(evento) {
    setValores({
      ...valores,
      [evento.target.getAttribute('name')]: evento.target.value,
    });
  }

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias([
              ...resposta,
            ]);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Página de Cadastro de Categoria:
        {valores.nome}
      </h1>

      <form onSubmit={function handleSubmit(evento) {
        evento.preventDefault();
        setCategorias([
          ...categorias,
          valores,
        ]);
        setValores(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={valores.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={valores.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={valores.cor}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && (
        <div>Loading...</div>
      )}

      <ul>
        {categorias.map((categoria, index) => (
          <li key={`id_${index}`}>{categoria.nome}</li>
        ))}
      </ul>

    </PageDefault>
  );
}

export default CadastroCategoria;
