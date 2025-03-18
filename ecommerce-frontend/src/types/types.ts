export interface User {
    name: string;
    email: string;
    photo: string;
    gender: string;
    role: string;
    dob: string;
    _id: string;
}

export interface Product {
    photo: string;
    name: string;
    price: number;
    stock: number;
    category: string;
    image: string;
    _id: string;
}

export type CartItem = {
    productId: string;
    photo: string;
    name: string;
    price: number;
    quantity: number;
    stock: number;
  };
  export type OrderItem = Omit<CartItem, "stock"> & { _id: string };