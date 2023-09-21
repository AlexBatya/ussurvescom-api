
class NewsModels {
    public getNewses(db: any){
        return new Promise((res: any) => {
            db.query(`SELECT * FROM news`, (err: any, data: any) => {
                if(err) res({
                    status: 404, 
                    massage: 'Не верные параметры запроса'
                })
                else res({
                    status: 200, 
                    massage: data
                })
            });
        })
    }

    public getNews(db: any, data: any){
        return new Promise((res: any) => {
            db.execute(`SELECT * FROM news WHERE id = ?`,
            [data.id],
            (err: any, dataDB: any) =>{
                if(err) res({
                    status: 404,
                    massage: 'Неверные параметры запроса'
                })
                else res({
                    status: 200, 
                    massage: dataDB
                })
            })
        })
    }

    public createNews(db: any, data: any){
        return new Promise((res: any) => {
            db.execute(`INSERT INTO news(title, description, date, logo, img_id) VALUES (?, ?, ?, ?, ?)`,
            [data.title, data.description, data.date, data.logo, data.img_id], 
            (err: any) => {
                if(err) res({
                    status: 404,
                    massage: 'Неверные параметры запроса'
                })
                else res({
                    status: 200,
                    massage: 'Новость добавлена'
                })
            })
        })
    }

    public deleteNews(db: any, data: any){
        return new Promise((res: any) => {
            db.execute(`DELETE FROM news WHERE id = ?`, 
            [data.id],
            (err: any) => {
                if(err) res({
                    status: 404,
                    message: 'Неверные параметры запроса'
                })
                else res({
                    status: 200,
                    message: 'Новость удалена'
                })
            })
        })
    }
}

export default new NewsModels;