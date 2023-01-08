interface ImageDataAttributes{
    url: string;
    mime: string;
}


interface ImageData{
    id: number;
    attributes: ImageDataAttributes;
}
export interface Gallery{
    data: ImageData[];
}

export interface Image{
    data: ImageData;
}
