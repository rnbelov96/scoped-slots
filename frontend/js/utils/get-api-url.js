export default () => (process.env.NODE_ENV === 'development'
  ? process.env.API_URL_DEV
  : process.env.API_URL_PROD);
