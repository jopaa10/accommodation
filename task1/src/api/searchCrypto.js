export async function fetchSearchCrypto(userInput) {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/search?query=${userInput}`
    );
    const cryptoData = await response.json();

    return cryptoData;
  } catch (error) {
    console.log(error);
  }
}
