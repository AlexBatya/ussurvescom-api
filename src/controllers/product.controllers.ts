import productModels from '../models/product.models'
import db from '../db';


class ProductControllers{

    public async createProduct(req: any, res: any){
        if(req.headers.authorization == ''){
            if(req.body){
                productModels.createProduct(db, req.body);
                return res
                    .status(200)
                    .send('Запрос принят в обработку')
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
} 

export default new ProductControllers;