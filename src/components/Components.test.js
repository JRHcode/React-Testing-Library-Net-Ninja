import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

test('renders Banner component', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  
  // Example test - check if Banner is rendered
  const bannerElement = screen.getByTestId('banner'); // Add data-testid="banner" to your Banner component
  expect(bannerElement).toBeInTheDocument();
});