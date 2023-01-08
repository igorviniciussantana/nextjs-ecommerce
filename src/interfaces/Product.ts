import { Image, Gallery } from "./Image";

interface ProductAttributes{
    title: string;
    slug: string;
    description: string;
    price: number;
    highlight: boolean;
    thumbnail: Image;
    gallery: Gallery[];
}


export interface Product{
    id: number;
    attributes: ProductAttributes;
}