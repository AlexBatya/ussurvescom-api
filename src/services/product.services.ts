import productModels from '../models/product.mysql'
import db from '../db'

class ProductServices{

    public getProducts(){
        return new Promise(async (res: any) => {
            const products = await productModels.getProducts(db)
            res(products)
        })
    }

    public createProduct(data: any){
        return new Promise(async (res: any) => {
            const createProduct = await productModels.createProduct(db, data)
            res(createProduct);
        })
    }

    public deleteProduct(data: any){
        return new Promise(async (res: any) => {
            const deleteProduct = await productModels.deleteProduct(db, data)
            res(deleteProduct)
        })
    }
}

export default new ProductServices;