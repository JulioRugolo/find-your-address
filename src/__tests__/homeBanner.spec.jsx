import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {HomeBanner} from '../components/HomeBanner';
import { useContent } from '@croct/plug-react';
import { useNavigate } from 'react-router-dom';

jest.mock('@croct/plug-react', () => {
  return {
    useContent: jest.fn(),
  };
});

jest.mock('react-router-dom', () => {
  return {
    useNavigate: jest.fn(),
  };
});

describe('HomeBanner', () => {
  it('renders HomeBanner with mocked content', () => {
    useContent.mockReturnValue({
      title: 'Seja bem vindo!',
      subtitle: 'A melhor maneira de localizar o endereço via CEP',
      cta: {
        label: 'Procurar endereço',
      },
    });

    render(<HomeBanner />);

    expect(screen.getByText('Seja bem vindo!')).toBeTruthy();
    expect(screen.getByText('A melhor maneira de localizar o endereço via CEP')).toBeTruthy();
    expect(screen.getByText('Procurar endereço')).toBeTruthy();
  });
});
