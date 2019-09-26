module.exports = {
  // logging: false,
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'meetapp',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
