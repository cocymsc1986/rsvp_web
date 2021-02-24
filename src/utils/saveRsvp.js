import axios from 'axios';

export const saveRsvp = async (values) => {
  try {
    const url = 'http://test.com';

    await axios.post(url, values);

    return {
      success: true,
      name: values.who,
      error: null,
    };
  } catch (error) {
    console.error('Failed to save: ', error);

    return {
      success: false,
      name: null,
      error,
    };
  }
};
