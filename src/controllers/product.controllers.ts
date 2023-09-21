import productServices from '../services/product.services'


class ProductControllers{


    public async getProducts(req: any, res: any){
        if(req.headers.authorization == ''){
            return res
                .status(200)
                .send(await productServices.getProducts())
        }
        else
            return res
                .status(403)
                .send('Ошибка доступа, неверный ключ аутентификации')
    }

    public async createProduct(req: any, res: any){
        if(req.headers.authorization == ''){
            if(req.body){
                productServices.createProduct(req.body)
                return res
                    .status(200)
                    .send('Товар добавлен')
            }
            else res
                .status(404)
                .send('Неверные параметры запроса') 
        }
        else 
            return res 
                .status(403)
                .send('Ошибка доступа, неверный ключ аутентификации')

    }

    public async deleteProduct(req: any, res: any){
        if(req.headers.authorization == ''){
            if(req.body){
                productServices.deleteProduct(req.body)
                return res
                    .status(200)
                    .send('Товар удалён')
            }
            else
                return res  
                    .status(404)
                    .send('Неверные параметры запроса')
        }
        else 
            return res
                .status(403)
                .send('Ошибка доступа, неверный ключ аутентификации')
    }
} 

export default new ProductControllers;