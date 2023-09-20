import fs from 'fs';
import sql from 'mysql2';
import color from 'colors';

const sqlJSON: any = fs.readFileSync('./config/localhost.json');
const SQL: any = JSON.parse(sqlJSON).SQL;



const db = sql.createConnection(SQL);
export default db;

    // db.connect((err: any)=> {
    //     if(err) console.log(color.red(err));
    //     else {
    //         console.log(color.green(`Сервер подключён к базе данных: ${SQL.database}`));
    //         return db
    //     }
    // })
