module.exports = {
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'my-precious',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/mean-social-token-auth',
  SALT_WORK_FACTOR: 10,
  GITHUB_SECRET: process.env.GITHUB_SECRET || '',
  GOOGLE_SECRET: process.env.GOOGLE_SECRET || '',
  INSTAGRAM_SECRET: process.env.INSTAGRAM_SECRET || ''
};
