import axios from "axios"

export const saveRsvp = async (values) => {
  try {
    const url = process.env.REACT_APP_API_URL

    await axios.post(url, values)

    return {
      success: true,
      name: values.who,
      error: null,
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Failed to save: ", error)

    return {
      success: false,
      name: null,
      error,
    }
  }
}
