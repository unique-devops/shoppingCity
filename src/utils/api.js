
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


export const fetchData = async (endpoint, options = {}) => {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
  };