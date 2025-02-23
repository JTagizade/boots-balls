

export interface CartState {
    items: Product[];
}

export interface ProductsState {
    products: ProductData; 
}

export interface Product {
    name: string,
    image?: string,
    localImg?: string,
    brand?: string,
    year?: number,
    cost: number,
    quantity: number;

}

export interface ProductData {
    category: string,
    type: string,
    products: Product[],
}


