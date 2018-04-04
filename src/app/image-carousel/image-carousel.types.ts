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

export abstract class ImageCarousel {

    static loadSlides(dataJson: SlideData): ImageSlide[] {
        let slides = [];
        dataJson.slides.forEach((slide) => {
            slides.push(ImageCarousel.fromJson(slide, dataJson.imageBaseDir))
        });
        return slides;
    }

    private static fromJson(json: ImageSlide, basePath: string) {
        return {
            src: basePath + json.src,
            alt: json.alt,
            caption: (json.caption) ? json.caption : null,
            href: (json.href) ? json.href : null
        }
    }
}