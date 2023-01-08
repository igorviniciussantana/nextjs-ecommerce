import { Image, Gallery } from "./Image";
import { Category } from "./Category";
import { Variations } from "./Variation";

interface ProductAttributes{
    title: string;
    slug: string;
    description: string;
    price: number;
    highlight: boolean;
    thumbnail: Image;
    gallery: Gallery[];
    category: Category;
    variation: Variations[];
}


export interface Product{
    id: number;
    attributes: ProductAttributes;
}