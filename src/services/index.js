export const WALLET_API = 'https://economia.awesomeapi.com.br/json/all';

export const fetchAPI = async (url) => {
  const response = await fetch(url);
  return response.json();
};
