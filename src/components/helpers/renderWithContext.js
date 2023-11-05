import React, { createContext } from 'react';
import { render } from '@testing-library/react';

export const TestContext = createContext();

export const TestProvider = ({ children, contextValue }) => (
  <TestContext.Provider value={contextValue}>
    {children}
  </TestContext.Provider>
);

const renderWithContext = (ui, options) => {
  return render(ui, { wrapper: TestProvider, ...options });
};

export default renderWithContext;
