import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export function Cep() {
  const [cep, setCep] = useState('');
  const [infoCep, setInfoCep] = useState({});
  const { logradouro, bairro, localidade, uf } = infoCep;
  const [isEnterPressed, setIsEnterPressed] = useState(false);

  const getCep = async (cepValue) => {
    const cepClean = cepValue.replace(/-/g, '');
    const url = `https://opencep.com/v1/${cepClean}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.error) {
      setCep('');
      Swal.fire({
        title: 'Digite um CEP válido!',
        text: 'Ex: 00000000 ou 00000-000',
        icon: 'error',
        confirmButtonText: 'Tentar novamente!',
      });
      return;
    }
    setInfoCep(data);
  };

  const handleChange = ({ target }) => {
    setCep(target.value);
    setInfoCep({});
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && cep && !isEnterPressed) {
      setIsEnterPressed(true);
      getCep(cep);
    }
  };

  useEffect(() => {
    if (isEnterPressed) {
      setIsEnterPressed(false);
    }
  }, [isEnterPressed]);

  return (
    <div className="container">
      <h1 className="cep-title" data-test-id="search">
        Digite seu CEP
      </h1>
      <input
        type="text"
        value={cep}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={() => getCep(cep)}>Buscar</button>
      {infoCep?.logradouro && (
        <div className="container-info">
          <p>
            <span>Logradouro:</span> <br></br>
            {logradouro}
          </p>
          <p>
            <span>Bairro:</span> <br></br>
            {bairro}
          </p>
          <p>
            <span>Cidade:</span> <br></br>
            {localidade}
          </p>
          <p>
            <span>Estado:</span> <br></br>
            {uf}
          </p>
        </div>
      )}
    </div>
  );
}
