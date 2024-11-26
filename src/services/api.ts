import axios from 'axios';

const API_BASE = 'https://www.themealdb.com/api/json/v1/1';

export const searchMealsByName = (query: string) => axios.get(`${API_BASE}/search.php?s=${query}`);
export const getMealById = (id: string) => axios.get(`${API_BASE}/lookup.php?i=${id}`);
export const listCategories = () => axios.get(`${API_BASE}/categories.php`);
