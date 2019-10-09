### Docker Container
  - docker run --name database_meetapp -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=database_meetapp -p 5432:5432 -d postgres

  - docker run --name mongomeetapp -p 27017:27017 -d -t mongo
  - docker run --name redismeetapp -p 6379:6379 -d -t redis:alpine

### Sequelize Migrations
  - yarn sequelize migration:create --name=create-users
  - yarn sequelize migration:create --name=create-files
  - yarn sequelize migration:create --name=add-avatar-field-to-users
  - yarn sequelize migration:create --name=create-meetups
  - yarn sequelize migration:create --name=create-subscriptions

  - yarn sequelize db:migrate
  - yarn sequelize db:migrate:undo
ou
  - npx sequelize-cli db:migrate
  - npx sequelize-cli db:migrate:undo


## Running
  - yarn dev - development mode, NODE_ENV
  - yarn queue - backgound jobs, send notification emails
