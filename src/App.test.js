import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react title', () => {
  render(<App />);
  const title = screen.getByText(/React Fetched Datatable/i);
  expect(title).toBeInTheDocument();
});
