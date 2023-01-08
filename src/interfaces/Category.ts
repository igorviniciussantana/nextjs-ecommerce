export interface Category{
    data: CategoryData;
}

interface CategoryData{
    id: number;
    attributes: CategoryDataAttributes;
}

interface CategoryDataAttributes{
    name: string;
    slug: string;
}