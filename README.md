# ayeGraphql
Description: CRUD apis with graphql

Tech stack:
Nodejs, Express server, Typescript

Database:
Postgresql

How to install:
- git clone the repository
- `npm install`  installing all the dependencies
- `npm run dev` for start developing
- `npm run typeorm migration:run` for running existing migrations into local
- `npm run typeorm migration:generate -n src/migration/<migrationName>` for automatically generating migration script from the changes from entities folder.
