import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Cep } from '../pages/Cep';

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ 
      logradouro: 'Rua Teste',
      bairro: 'Bairro Teste',
      localidade: 'Cidade Teste',
      uf: 'UF Teste',
    }),
  })
);

describe('Cep', () => {
  it('renders Cep component', () => {
    render(<Cep />);
    const cepTitle = screen.getByText('Digite seu CEP');
    expect(cepTitle).toBeTruthy();
    const searchButton = screen.getByText('Buscar');
    expect(searchButton).toBeTruthy();
  });

  it('fetches and displays address information on button click', async () => {
    render(<Cep />);

    const input = screen.getByRole('textbox');
    const searchButton = screen.getByText('Buscar');
    
    fireEvent.change(input, { target: { value: '12345-678' } });

    fireEvent.click(searchButton);

    await waitFor(() => {
      const logradouro = screen.getByText('Rua Teste');
      const bairro = screen.getByText('Bairro Teste');
      const cidade = screen.getByText('Cidade Teste');
      const estado = screen.getByText('UF Teste');
      
      expect(logradouro).toBeTruthy();
      expect(bairro).toBeTruthy();
      expect(cidade).toBeTruthy();
      expect(estado).toBeTruthy();
    });
  });
});
