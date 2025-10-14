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

        let createData = {
            product_name: requestData.product_name,
            product_description: requestData.product_description,
            product_price: requestData.product_price,
            product_image_url: requestData.product_image_url ?? null,
            product_quantity: requestData.product_quantity
        };

        return this.productRepo.createProducts(createData);

    }
}