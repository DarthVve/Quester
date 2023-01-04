import { Dialect, Sequelize } from 'sequelize';

const database = process.env.DATABASE as string;
const user = process.env.DB_USER as string;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST as string;
const port = process.env.DB_PORT;

const DB = new Sequelize(database, user, password, {
    host: host,
    port: Number(port),
    dialect: 'mysql',
    logging: false
});

export default DB;