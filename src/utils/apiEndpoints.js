// utils/apiEndpoints.js

export const API_ENDPOINTS = {
    getProduct: '/products?limit=50',
    getProductCat: '/products/category/electronics',
    getProductById: (id) => `/products/${id}`,
    createProduct: '/products',
    updateProduct: (id) => `/products/${id}`,
    deleteProduct: (id) => `/products/${id}`,


    getCategories: '/products/categories',    
  };
  