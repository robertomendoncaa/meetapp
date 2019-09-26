### Docker Container
  docker run --name database -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=meetapp -p 5433:5432 -d postgres

### Sequelize Migrations
  yarn sequelize migration:create --name=create-users
  yarn sequelize migration:create --name=create-files
  yarn sequelize migration:create --name=add-avatar-field-to-users
  yarn sequelize migration:create --name=create-meetups
  yarn sequelize migration:create --name=create-subscriptions

  yarn sequelize db:migrate


provider -> organizer
appointments -> meetups
