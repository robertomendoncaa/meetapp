# MeetApp
Projeto desenvolvido como desafio final e certificação do [Bootcamp GoStack da Rocketseat.](https://rocketseat.com.br/bootcamp)

## Certificado
[Certificado de conclusão](https://github.com/robertomendoncaa/meetapp/blob/master/certificate/certificado.pdf)

## Instalação
### Requerimentos
Para rodar essa aplicação completa é necessário o [NodeJs](https://nodejs.org/en/), [ReactJs](https://reactjs.org), [React Native](https://facebook.github.io/react-native/), [Docker](https://www.docker.com) e emulador android ([Android Studio](https://developer.android.com/studio) ou [Genymotion](https://www.genymotion.com)).

### Comandos
#### Instalação da API/Backend
Clone o repositório e instale as dependências dentro da pasta `meetapp/api`
```
git clone https://github.com/robertomendoncaa/meetapp.git
cd meetapp/api
yarn
```
#### Criação dos containers Docker
Será utilizado **Postgres** para base de dados principal, **MongoDB** para notificações e **Redis** para monitoramento de filas.
```
docker run --name database -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=meetapp -p 5432:5432 -d postgres
docker run --name mongomeetapp -p 27017:27017 -d -t mongo
docker run --name redismeetapp -p 6379:6379 -d -t redis:alpine
```
> Se já possuir o **Postgres** instalado em sua máquina, fazer redirecionamento de porta `5433:5432`
#### Criação das tabelas do banco de dados
Cria as tabelas do banco de dados a partir das migrations da pasta `src/database/migrations`

```
yarn sequelize db:migrate
```

> Renomear arquivo `.env.example` para `.env`

> Incluir seus dados de configurações: banco de dados, host, senha, email...

#### Rodar API/Backend
```bash
# modo desenvolvimento
  yarn dev
# monitoramento de filas, envio de e-mails
  yarn queue
```

#### Instalação do Frontend
Instale as dependências dentro da pasta `meetapp/web`
```
cd meetapp/web
yarn
```
#### Rodar Frontend
```
yarn start
```

#### Instalação do Aplicativo android (app mobile)
```
cd meetapp/app
yarn
```
#### Rodar App
```
react-native run-android
```