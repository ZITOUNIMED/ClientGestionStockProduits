const BASE = 'http://localhost';
const PORT = 8080;
const PATH = '/api';

export const API_URLS = {
  PRODUITS_URL: BASE + ':' + PORT + PATH + '/produit',
  USER_CRUD_URL: BASE + ':' + PORT + '/crud_user',
  USER_URL: BASE + ':' + PORT + PATH +'/user'
};
