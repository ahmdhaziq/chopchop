export interface ListRequestData {
    page: number | null;
    limit: number | null;
  }

  export interface CreateProduct {
    product_name: string; 
    product_description: string; 
    product_price: number; 
    product_image_url: Buffer; 
    product_quantity: number;
  }