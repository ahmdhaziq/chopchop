import { productRepository } from "../repository/product.repository";
import { products } from "../generated/prisma";
import { CreateProduct, ListRequestData } from "../interfaces/product.interfaces";

export class productService {
    private productRepo: productRepository;

    constructor() {
        this.productRepo = new productRepository();
    }

    async listProducts (requestData: ListRequestData /*{page: number | null; limit: number | null;  }*/) {

        let limit: number | null = requestData.limit ?? null;
        return this.productRepo.fetchProducts(limit);

    }

    async getProductById(id: number) {

        return this.productRepo.fetchProductById(id);

    }

    async createProducts (requestData: CreateProduct) {
        const { product_name, 
                product_description, 
                product_price,
                product_image_url, 
                product_quantity
        } = requestData;

        let createData: CreateProduct = {
            product_name,
            product_description,
            product_price,
            product_image_url,
            product_quantity
        };

        return this.productRepo.createProducts(createData);

    }
}