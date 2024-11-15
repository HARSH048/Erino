require('dotenv').config()
const { DataSource } = require ("typeorm");
import {ContactEntity} from '../models'


export const AppDataSource = new DataSource({
   type: 'postgres',
   host: process.env.DB_HOST,
   port: process.env.DB_PORT,
   username: process.env.DB_USER,
   password: process.env.DB_PASS,
   database: process.env.DB_NAME,
   synchronize: true,
   entities: [ContactEntity],
   autoloadEntities: true
  
  // entities: [`./models/*.entity.{ts,js}`],
})