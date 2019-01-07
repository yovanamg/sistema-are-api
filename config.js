module.exports = {
  port: 8080,
  dbConnectionString: {
    username: 'yovanamata',
    password: '110694',
    database: 'fwklineamando',
    host: 'localhost',
    dialect: 'postgres'
  },
  saltRounds: 6,
  jwtSecret: 'yo-its-a-secret',
  tokenExpireTime: '6h'
}