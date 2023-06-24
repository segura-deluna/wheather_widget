const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '9040d0497375481b99b7fe8109e297b7';

export const fetchWeather = async (city) => {
  try {
    const response = await fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&lang=ru`);
    if (!response.ok) {
      throw new Error('Ошибка запроса');
    }
    const data = await response.json();
    return {success: true, data};
  } catch (err) {
    return {success: false, err};
  }
};