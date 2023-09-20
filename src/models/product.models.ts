
class ProductModels{
    public createProduct(db: any, data: any){
        return new Promise((res: any) => {
            db.execute(`INSERT INTO product(category_id, title, description, price, img_id) VALUES (?, ?, ?, ?, ?);`,
            [data.category_id, data.title, data.description, data.price, data.img_id],
            (err: any) => {
                if(err) return {
                    status: 404, 
                    massage: 'Не верно указанны входные параметры'
                }
                else 
                    return {
                        status: 200, 
                        massage: 'товар добавлен'
                    }
            })
        })
    }
}

export default new ProductModels;