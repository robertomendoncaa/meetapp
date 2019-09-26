### Docker Container
  docker run --name database -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=meetapp -p 5433:5432 -d postgres

### Sequelize Migrations
  yarn sequelize migration:create --name=create-users

  yarn sequelize db:migrate
