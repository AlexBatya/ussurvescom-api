
class CategroyModules{
    public getCategorys(db: any){
        return new Promise((res: any) => {
            db.query(`SELECT * FROM category`, (err: any, data: any) => {
                if(err) res({
                    status: 404,
                    massage: 'Неверные параметры запроса'
                })
                else{
                    res({
                        status: 200,
                        massage: data
                    })
                }
            })
        })
    }
    public getCategory(db: any){
        return new Promise((res: any) => {
            db.query(`SELECT id FROM category`, (err: any, data: any) => {
                if(err) res({
                    status: 404, 
                    massage: 'Неверные параметры запроса'
                })
                else{
                    res({
                        status: 200,
                        massage: data
                    })
                }
            })
        })
    }
    public createCategory(db: any, data: any){
        return new Promise((res: any) => {
            db.execute(`INSERT INTO category(title) VALUES (?)`, 
            [data.title], 
            (err: any) => {
                if(err) res({
                    status: 404,
                    massage: 'Неверные параметры запроса'
                })
                else {
                    res({
                        status: 200,
                        massage: 'Категория добавленна'
                    })
                }
            })
        })
    }
    public deleteCategory(db: any, data: any){
        return new Promise((res: any) => {
            db.execute(`DELETE FROM category WHERE id = ?`, 
            [data.id], 
            (err: any) => {
                if(err) res({
                    status: 404,
                    massage: 'Неверные параметры запроса'
                })
                else{
                    res({
                        status: 200,
                        massage: 'Категория добавленна'
                    })
                }
            })
        })
    }
}

export default new CategroyModules;