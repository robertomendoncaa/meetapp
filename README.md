# MeetApp
Projeto desenvolvido como desafio final e certificação do Bootcamp GoStack da Rocketseat.

## Instalação
### Requerimentos
Para rodar essa aplicação completa é necessário o NodeJs, ReactJs, React Native, Docker e emulador android (Android Studio ou Genymotion).

### Comandos
#### Instalação da API/Backend
```
git clone https://github.com/robertomendoncaa/meetapp.git
cd meetapp/api
yarn
```
#### Criação dos containers Docker
Será utilizado Postgres para base de dados principal, MongoDB para notificações e Redis para monitoramento de filas.
```
docker run --name database -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=meetapp -p 5432:5432 -d postgres
docker run --name mongomeetapp -p 27017:27017 -d -t mongo
docker run --name redismeetapp -p 6379:6379 -d -t redis:alpine
```
Se já possuir o Postgres instalado em sua máquina, rodar na porta ```5433:5432```
#### Criação das tabelas do banco de dados
```yarn sequelize db:migrate```

- Renomear arquivo ```.env.example``` para ```.env```
- Incluir seus dados de configurações: banco de dados, senha, email...

#### Rodar API/Backend
```
yarn dev # development mode NODE_ENV
yarn queue # backgound jobs nodemailer, send notification emails
```