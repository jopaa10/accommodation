export async function getTrendingCryptoCurrencies() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    const cryptoData = await response.json();

    return cryptoData;
  } catch (error) {
    console.log(error);
  }
}
