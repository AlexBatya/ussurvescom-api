import categoryServices from "../services/category.services"

class CategoryControllers{
    public async getCategorys(req: any, res: any){
        if(req.headers.authorization == ''){
            categoryServices.getCategorys();
            return res
                .status(200)
                .send()
        }
        else
            return res  
                .status(403)
                .send('Ошибка доступа, неверный ключ аутентификации')
    }

    public async getCategory(req:any, res: any){

        if(req.headers.authorization == ''){

            return res
                .status(200)
                .send()
        }
        else
            return res  
                .status(403)
                .send('Ошибка доступа, неверный ключ аутентификации')
    }

    public async createCategory(req: any, res: any){
        if(req.headers.authorization == ''){
            if(req.body){
                categoryServices.createCategory(req.body);
                return res
                    .status(200)
                    .send()
            }
            else return res
                .status(404)
                .send('Не верные параметры запроса')
            
        }
        else
            return res  
                .status(403)
                .send('Ошибка доступа, неверный ключ аутентификации')

    }

    public async deleteCategory(req: any, res: any){
        if(req.headers.authorization == ''){
            if(req.body){
                categoryServices.deleteCategory(req.body);
                return res
                    .status(200)
                    .send('Категория удалена')
            }
            else return res 
                .status(404) 
                .send("Неверные параметры запроса")
        }
        else
            return res  
                .status(403)
                .send('Ошибка доступа, неверный ключ аутентификации')

    }
}

export default new CategoryControllers;