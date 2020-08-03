import { useState } from 'react';

export default function useForm(valoresIniciais) {
  const [valores, setValores] = useState(valoresIniciais);

  function handleChange(evento) {
    setValores({
      ...valores,
      [evento.target.getAttribute('name')]: evento.target.value,
    });
  }

  function clearForm() {
    setValores(valoresIniciais);
  }

  return {
    valores,
    handleChange,
    clearForm,
  };
}
