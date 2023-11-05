import React from 'react';
import { fireEvent, render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HomeBanner } from './HomeBanner';
import { useContent } from '@croct/plug-react';
import renderWithContext from './helpers/renderWithContext';

jest.mock('@croct/plug-react', () => {
    return {
        useContent: jest.fn(),
    };
});

test('renders HomeBanner with mock', async () => {
    useContent.mockReturnValue({
        title: 'Seja bem vindo!',
        subtitle: 'A melhor maneira de localizar o endereço via CEP',
        cta: {
            label: 'Procurar endereço',
        },
    });

    renderWithContext(<HomeBanner />);

    await waitFor(() => {
        expect(screen.getByText('Seja bem vindo!')).toBeTruthy();
        expect(screen.getByText('A melhor maneira de localizar o endereço via CEP')).toBeTruthy();
        expect(screen.getByText('Procurar endereço')).toBeTruthy();
        const startButton = screen.getByText('Procurar endereço');
        expect(startButton).toBeTruthy();
        userEvent.click(startButton);

    });
    expect(screen.getByText('Procurar endereço')).toBeTruthy()



});