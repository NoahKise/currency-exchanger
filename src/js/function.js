export class API {
  static async makeAPICall(url) {
    try {
      const response = await fetch(url);
      const resultText = await response.text();
      const result = JSON.parse(resultText);
      if (!response.ok) {
        throw new Error('Request failed with status: ' + response.status + " " + result["error-type"]);
      }
      return { result };
    } catch (error) {
      return { error };
    }
  }

  static async convert(cur1, cur2, amt) {
    const apiKey = process.env.API_KEY;
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}//${cur1}/${cur2}/${amt}`;
    
    return await this.makeAPICall(url);
  }
}