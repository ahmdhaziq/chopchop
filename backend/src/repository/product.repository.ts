import prisma from "../prisma";
import { products } from "../generated/prisma";
import { CreateProduct } from "../interfaces/product.interfaces";

export class productRepository{
    async fetchProducts (limit: number | null,) {
        return prisma.products.findMany({
            omit: {
                created_at: true,
                updated_at: true
            },
            take: limit ?? 10,
            orderBy: {id: "desc"},
        });
    }

    async fetchProductById (id: number) {
        return prisma.products.findUnique({
            where: {
                id: id
            }
        })
    }

    async createProducts (data: CreateProduct) {
        return prisma.products.create({
            data: {
                product_name: data.product_name,
                product_description: data.product_description,
                product_price: data.product_price,
                product_image_url: data.product_image_url,
                product_quantity: data.product_quantity
            }
        })
    }

    async updateProducts (id:number,productData: any) {
        return prisma.products.update({
            where: {id},
            data: productData
        });
    }

    async deleteProducts (id: number) {
        return prisma.products.delete({
            where: {id}
        })
    }

        
}