export interface Carousel {
    name: string;
    id: string;
}
  
export interface ImageSlide {
    src: string;
    alt: string;
    caption?: string;
    href?: string;
}

export interface SlideData {
    imageBaseDir: string;
    slides: ImageSlide[];
}