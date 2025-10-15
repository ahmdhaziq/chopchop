import prisma from "../prisma";
import { products } from "../generated/prisma";
import { productService } from "../services/product.service";
import { Request,Response } from "express";
import { CreateProduct, ListRequestData } from "../interfaces/product.interfaces";
export class ProductController {
    private productService : productService;

    constructor() {
        this.productService = new productService();
    }

    listProducts = async (req: Request, res: Response): Promise<void> => {
        let data: ListRequestData = {
            limit: req.body?.limit ?? 10,
            page: req.body?.page ?? 1,
        };

        try {
            const products = await this.productService.listProducts(data);
            res.status(200).json(products);
        } catch (error: undefined | any) {
            res.status(400).json({error: error.message});
        }
    }

    getProductById = async (req: Request, res: Response): Promise<void> => {
        try {
            const product = await this.productService.getProductById(Number(req.params.id));
            res.status(200).json(product);
        } catch (error: undefined | any) {
            res.status(400).json({error: error.message});
        }
    }

    createProduct = async (req: Request, res: Response): Promise<void> => {
        const { product_name, 
                product_description, 
                product_price,
                product_image_url, 
                product_quantity} = req.body;
        
        let productData: CreateProduct = {
            product_name,
            product_description,
            product_price,
            product_image_url,
            product_quantity,
        };

        try {
            const newProduct = await this.productService.createProducts(productData);
            res.status(200).json(newProduct);
        } catch (error: undefined | any) {
            res.status(400).json({error: error.message});
        }
    }
}