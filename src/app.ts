import fs from 'fs';
import express from 'express';
import color from 'colors';
import cors from 'cors';
import bodyParser from 'body-parser';

import routers from './routes'

const app = express();

const localhostJSON: any = fs.readFileSync('./config/localhost.json');
const localhost: any = JSON.parse(localhostJSON); 

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json({limit: "2000mb"}));

app.use('/api', routers)

app.listen(localhost.PORT, () => console.log(color.green('Сервер запущен, батеньки')));