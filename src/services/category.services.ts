import categoryModels from '../models/category.mysql'
import db from '../db'

class CategoryServices{
    public getCategorys(){
        return new Promise(async (res: any) => {
            const getcategory = await categoryModels.getCategorys(db)
            res(getcategory)
        })
    }

    public getCategory(){
        return new Promise(async (res: any) => {
            res()
        })
    }

    public createCategory(data: any){
        return new Promise(async (res: any) => {
            const createCategory = await categoryModels.createCategory(db, data)
            res(createCategory)
        })
    }

    public deleteCategory(data: any){
        return new Promise(async (res: any) => {
            const deleteCategory = await categoryModels.deleteCategory(db, data)
            res(deleteCategory)
        })
    }
}

export default new CategoryServices;