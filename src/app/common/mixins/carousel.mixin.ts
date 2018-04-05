import { ImageSlide } from "../../image-carousel/image-carousel.types";

export abstract class CarouselMixin {

    protected extractImageSlides(dataJson: ServiceDataJson): ImageSlide[] {
        let slides = [];
        dataJson.slides.forEach((slide) => {
            slides.push(this.fromJson(slide, dataJson.imageBaseDir))
        });
        return slides;
    }

    protected fromJson(json: ImageSlide, basePath: string) {
        return {
            src: basePath + json.src,
            alt: json.alt,
            caption: (json.caption) ? json.caption : null,
            href: (json.href) ? json.href : null
        }
    }
}

export interface ServiceDataJson {
    imageBaseDir: string;
    slides: ImageSlide[];
    services: string[];
}