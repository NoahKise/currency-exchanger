export async function convert(cur1, cur2, amt) {
  const apiKey = process.env.API_KEY;
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${cur1}/${cur2}/${amt}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Request failed with status: ' + response.status);
    }

    const resultText = await response.text();
    const result = JSON.parse(resultText);
    return result;
  } catch (error) {
    const response = await fetch(url);
    const resultText = await response.text();
    const result = JSON.parse(resultText);
    const detailedError = {
      message: 'There was an error in your API request',
      originalError: error.message,
      typeError: result["error-type"]
    };
    return detailedError;
  }
}