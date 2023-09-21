import newsModels from '../models/news.mysql';
import db from '../db';

class NewsServices{
    public getNewses(){
        return new Promise(async (res: any) => {
            const getnewses = await newsModels.getNewses(db)
            res(getnewses)
        })
    }
    public getNews(data: any){
        return new Promise(async (res: any) => {
            const getnews = await newsModels.getNews(db, data)
            res(getnews)
        })
    }
    public createNews(data: any){
        return new Promise(async (res: any) => {
            const createnews = await newsModels.createNews(db, data)
            res(createnews)
        })
    }
    public deleteNews(data: any){
        return new Promise(async (res: any) => {
            const deletenews = await newsModels.deleteNews(db, data)
            res(deletenews)
        })
    }
}

export default new NewsServices;