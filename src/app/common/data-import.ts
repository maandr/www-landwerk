import { ImageSlide } from "../image-carousel/image-carousel.types";

export abstract class JsonLoader {

    static loadSlides(dataJson: ServiceDataJson): ImageSlide[] {
        let slides = [];
        dataJson.slides.forEach((slide) => {
            slides.push(JsonLoader.fromJson(slide, dataJson.imageBaseDir))
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

export interface ServiceDataJson {
    imageBaseDir: string;
    slides: ImageSlide[];
    services: string[];
}