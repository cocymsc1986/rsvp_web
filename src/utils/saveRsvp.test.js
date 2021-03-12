import axios from 'axios';

import { saveRsvp } from './saveRsvp';

jest.mock('axios', () => ({
  post: jest.fn(),
}));

describe('saveRsvp api call', () => {
  it('should return the correct data from a successful call', async () => {
    const mockPost = jest.fn();
    axios.post.mockImplementationOnce(mockPost);

    const result = await saveRsvp({
      who: 'test',
    });

    expect(mockPost).toHaveBeenCalled();
    expect(result).toEqual({
      success: true,
      error: null,
      name: 'test',
    });
  });

  it('should return the correct data from a failed call', async () => {
    const mockPost = jest.fn(() => Promise.reject('Error'));
    axios.post.mockImplementationOnce(mockPost);

    const result = await saveRsvp({
      who: 'test',
    });

    expect(mockPost).toHaveBeenCalled();
    expect(result).toEqual({
      success: false,
      error: 'Error',
      name: null,
    });
  });
});
