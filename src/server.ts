import express from 'express'
require("dotenv").config();
import routes from './routes/route'
import morgan from 'morgan'
import {AppDataSource} from './config/connection'

const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));
app.use('/app',routes)

function connect(){
    AppDataSource.initialize()
  .then(async () => {
    console.log("Connection initialized with database...");
  })
  .catch((error) => console.log(error));
}

app.listen(PORT,()=>{
    console.log(`App running on port ${PORT}`)
    connect()
})
