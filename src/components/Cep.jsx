import React, { useEffect, useState } from 'react';
import './cep.css';
import '../App.css';

export function Cep() {
  const [cep, setCep] = useState([]);
  const [infoCep, setInfoCep] = useState({});
  const {logradouro, bairro, localidade, uf} = infoCep;


  const getCep = async (cep) => {
    const url = `https://opencep.com/v1/${cep}`
    const response = await fetch(url);
    const data = await response.json();
    setInfoCep(data);
  }

  const handleChange = (event) => {
    const cleanedCep = event.target.value.replace(/-/g, '');
    setCep(cleanedCep);
  };

  return (
    <div className='container'>
      <h1 className='cep-title' data-test-id="search" >Digite seu CEP</h1>
      <input type="text" value={cep} onChange={handleChange} />
      <button onClick={() => getCep(cep)}>Buscar</button>
      {infoCep?.logradouro && <div className='container-info'>
        <p><span>Logradouro:</span> <br></br>{logradouro}</p>
        <p><span>Bairro:</span> <br></br>{bairro}</p>
        <p><span>Cidade:</span> <br></br>{localidade}</p>
        <p><span>Estado:</span> <br></br>{uf}</p>
      </div>}
    </div>
  );
  
}
