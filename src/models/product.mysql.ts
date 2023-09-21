
class ProductModels{

    public getProducts(db: any){
        return new Promise((res: any) => {
            db.query(`SELECT * FROM product`, (err: any, data: any) => {
                if(err) res({
                    status: 404,
                    massage: 'Неверные параметры запроса'
                })
                else res({
                    status: 200,
                    massage: data
                })

            })
        })
    }

    public createProduct(db: any, data: any){
        return new Promise((res: any) => {
            db.execute(`INSERT INTO product(category_id, title, description, price, img_id) VALUES (?, ?, ?, ?, ?);`,
            [data.category_id, data.title, data.description, data.price, data.img_id],
            (err: any) => {
                if(err) res({
                    status: 404, 
                    massage: 'Не верно указанны входные параметры'
                })
                else 
                    res({
                        status: 200, 
                        massage: 'товар добавлен'
                    })
            })
        })
    }

    public deleteProduct(db: any, data: any){
        return new Promise((res: any) => {
            db.execute(`DELETE FROM product WHERE id = ?`, [data.id], (err: any) => {
                if(err) res({
                    status: 404, 
                    massage: 'Не верно указанны входные параметры'
                })
                else 
                    res({
                        status: 200, 
                        massage: 'товар добавлен'
                    })
            })
        })
    }
}

export default new ProductModels;