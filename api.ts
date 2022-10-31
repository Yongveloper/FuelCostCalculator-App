import { API_URL } from '@env';

export async function fetchOilData() {
  try {
    const data = await fetch(API_URL);
    const json = await data.json();
    return json;
  } catch (error) {
    console.error(error);
    return error;
  }
}
