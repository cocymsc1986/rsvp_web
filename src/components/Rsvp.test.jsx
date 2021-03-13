import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Rsvp } from './Rsvp';
import { saveRsvp } from '../utils/saveRsvp';

jest.mock('../utils/saveRsvp', () => ({
  saveRsvp: jest.fn(),
}));

jest.mock('../utils/namesList', () => ({
  namesList: ['testName'],
}));

describe('Rsvp component', () => {
  it('should render', () => {
    render(<Rsvp />);

    expect(screen.getByText('RSVP')).toBeInTheDocument();
  });

  it('should display validation message when invalid name used', () => {
    render(<Rsvp />);

    userEvent.click(screen.getByText('Send!'));

    expect(
      screen.queryByText('Name not recognised, please include your surname')
    ).toBeInTheDocument();

    expect(saveRsvp).not.toHaveBeenCalled();
  });

  it('should display success message when submitted', async () => {
    saveRsvp.mockReturnValue({
      success: true,
      name: 'test',
      error: null,
    });

    render(<Rsvp />);

    const nameTextBox = screen.getByLabelText(/Who\?/);
    userEvent.type(nameTextBox, 'Name TestName');
    userEvent.click(screen.getByText('Send!'));

    await waitFor(() =>
      expect(
        screen.queryByText('We have received your RSVP, thank you!')
      ).toBeInTheDocument()
    );
  });

  it('should close modal when clicking close', () => {
    render(<Rsvp />);

    expect(
      screen.queryByText('We have received your RSVP, thank you!')
    ).not.toBeInTheDocument();
  });

  it('should display error message when error submitting', async () => {
    saveRsvp.mockReturnValue({
      success: false,
      name: null,
      error: true,
    });

    render(<Rsvp />);

    const nameTextBox = screen.getByLabelText(/Who\?/);
    userEvent.type(nameTextBox, 'Name TestName');
    userEvent.click(screen.getByText('Send!'));

    await waitFor(() =>
      expect(
        screen.queryByText('There was a problem saving RSVP, please try again.')
      ).toBeInTheDocument()
    );
  });
});
