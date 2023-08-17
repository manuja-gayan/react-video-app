import { render, screen } from '@testing-library/react';
import SampleClsVideo from './modules/sample/SampleClsVideo';

test('renders learn react link', () => {
  render(<SampleClsVideo />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
