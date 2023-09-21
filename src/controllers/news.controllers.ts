import newsServices from '../services/news.services'

class NewsControllers{
    public async getNewses(req: any, res: any){
        if(req.headers.authorization == ''){
            return res 
                .status(200)
                .send(await newsServices.getNewses())
        }
        else res
            .status(403)
            .send('Ошибка доступа, неверный ключ аутентификации')
    }

    public async getNews(req: any, res: any){
        if(req.headers.authorization == ''){
            if(req.body){
                return res 
                    .status(200)
                    .send(await newsServices.getNews(req.body))
            }
            else res
                .status(404)
                .send('Неверные параметры запроса')
        }
        else res
            .status(403)
            .send('Ошибка доступа, неверный ключ аутентификации')
    }

    public async createNewses(req: any, res: any){
        if(req.headers.authorization == ''){
            if(req.body){
                newsServices.createNews(req.body);
                return res 
                    .status(200)
                    .send('Добавлена в обработку')
            }
            else res
                .status(404)
                .send('Неверные параметры запроса')
        }
        else res
            .status(403)
            .send('Ошибка доступа, неверный ключ аутентификации')
    }

    public async deleteNewses(req: any, res: any){
        if(req.headers.authorization == ''){
            if(req.body){
                newsServices.deleteNews(req.body);
                return res 
                    .status(200)
                    .send('Новость отправлена на удаление')
            }
            else res
                .status(404)
                .send('Неверные параметры запроса')
        }
        else res
            .status(403)
            .send('Ошибка доступа, неверный ключ аутентификации')
    }
}

export default new NewsControllers;