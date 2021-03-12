import { render, screen } from '@testing-library/react';
import { OnTheDay } from './OnTheDay';

describe('OnTheDay component', () => {
  it('should render', () => {
    render(<OnTheDay />);

    expect(screen.getByText('On the Big Day')).toBeInTheDocument();
  });

  it('should contain map component', () => {
    render(<OnTheDay />);

    expect(screen.getByTestId('map-component')).toBeInTheDocument();
  });
});
