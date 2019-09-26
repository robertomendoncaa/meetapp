module.exports = {
  // logging: false,
  dialect: 'postgres',
  host: 'localhost',
  port: '5433',
  username: 'postgres',
  password: 'postgres',
  database: 'meetapp',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
