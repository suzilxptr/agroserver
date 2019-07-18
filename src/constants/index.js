export const isDev = process.env.NODE_ENV === 'development';

export const DB_URL = 'mongodb://<username>:<password>@ds123465.mlab.com:<port>/agrostore' || 'mongodb://localhost:27017/agrostore-dev';
