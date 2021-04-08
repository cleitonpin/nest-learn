require('dotenv').config();

module.exports = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "post",
    "database": "nest",
    "migrations": [
        `${process.env.MIGRATION === 'ts' ? './src/database/migrations/*.ts' : './dist/database/migrations/*.js'} `
    ],
    "entities": [
        `${process.env.MIGRATION === 'ts' ? './src/**/*entity.ts' : './dist/**/*entity.js'} `
    ],
    "cli": {
        "migrationsDir": "./src/database/migrations",
        "entitiesDir": "./src/models/"
    },
    "synchronize": true
}   