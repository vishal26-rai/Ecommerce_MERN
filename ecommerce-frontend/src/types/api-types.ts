import { User, Product } from "./types"

export type MessageResponse ={
    message: string,
    success: boolean,
}

export type UserResponse ={
    user:User,
    success: boolean,
}

export type AllProductResponse ={
    products:Product[],
    success: boolean,
}