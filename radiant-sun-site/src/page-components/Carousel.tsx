"use client"

import { useState } from "react";

import "../../styles/carousel.css";

export function Carousel() {

    interface Image {
        src: string,
        alt: string,
        id: number
    }

    const images: Array<Image> = [
        { 
            src: "https://imagedelivery.net/F-fcHDYT3jDcMPQ0noeywA/f2f4e5f9-ee96-427a-bfab-1d8aa79c4a00/public", 
            alt: "Home base of the game", 
            id: 1 
        }, 
        { 
            src: "https://imagedelivery.net/F-fcHDYT3jDcMPQ0noeywA/e367bda2-e7eb-4ba9-d75b-0db61c43a800/public", 
            alt: "Traversing the world with a party", 
            id: 2 
        }, 
        { 
            src: "https://imagedelivery.net/F-fcHDYT3jDcMPQ0noeywA/745259c2-80f4-43cc-2f50-df8ca77c8200/public", 
            alt: "Battle against dark wing enemies", 
            id: 3 
        }
    ]

    const [currentImage, setCurrentImage] = useState<Image>(images[0]);

    function findImageIndex(): number {
         
        const currentImageIndex = images.findIndex((searchImage: Image) => {

            if (searchImage.id === currentImage.id) {

                return true;

            } else {

                return false;

            }

        })

        return currentImageIndex;

    }

    function nextImage() {

        const currentImageIndex = findImageIndex();

        if (currentImageIndex === 2) {

            setCurrentImage(images[0]);

        } else {

            setCurrentImage(images[ currentImageIndex + 1 ]);
        
        }

    }

    function previousImage() {

        const currentImageIndex = findImageIndex();

        if (currentImageIndex === 0) {

            setCurrentImage(images[2]);

        } else {

            setCurrentImage(images[ currentImageIndex - 1 ]);

        }

    }

    return (
        <div className="carousel">

            <img className="carousel-image" src={ currentImage.src } alt={ currentImage.alt } />

            <div className="flex" style={{ width: "100%", justifyContent: "space-between" }}>

                <button className="btn" onClick={ previousImage }>← Previous</button>

                <button className="btn" onClick={ nextImage }>Next →</button>

            </div>

        </div>
    )
}