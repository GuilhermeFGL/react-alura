import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);
  function handleChange(infosDoEvento) {
    setValues({
      ...values,
      [infosDoEvento.target.getAttribute('name')]: infosDoEvento.target.value,
    });
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
