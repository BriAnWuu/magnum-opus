import parse from "html-react-parser";
import { useState } from "react";
import Dots from "../Dots/Dots";
import GalleryImage from "../GalleryImage/GalleryImage";
import GalleryNav from "../GalleryNav/GalleryNav";
import "./Gallery.scss";

function Gallery({ galleryArtworks }) {
    const [imageIndex, setImageIndex] = useState(0);
    if (!galleryArtworks) {
        return (
            <p>Loading...</p>
        )
    }
    return (
        <div className="gallery">
            <div className="gallery__frame">
                <div className="gallery__image-container">
                    <GalleryImage imageId={ galleryArtworks[imageIndex]?.id } />
                </div>
            </div>
            <div className="gallery__section gallery__section--title">
                <div className="gallery__title-inner-container">
                    <h2 className="gallery__title">{ galleryArtworks[imageIndex]?.title }</h2>
                    <p className="gallery__year">
                        { galleryArtworks[imageIndex]?.date_start === galleryArtworks[imageIndex]?.date_end ?
                            galleryArtworks[imageIndex]?.date_end :
                            `${ galleryArtworks[imageIndex]?.date_start } - ${ galleryArtworks[imageIndex]?.date_end }`
                        }
                    </p>
                    <p className="gallery__artist">{ galleryArtworks[imageIndex]?.artist_display }</p>
                    <div className="gallery__description">
                        { galleryArtworks[imageIndex]?.description ?
                            parse(galleryArtworks[imageIndex].description) : 
                            "Description not available"
                        }
                    </div>
                </div>
                <Dots
                    galleryArtworks={galleryArtworks} 
                    imageIndex={imageIndex} 
                    setImageIndex={setImageIndex} 
                />   
            </div>
            <div className="gallery__section gallery__section--info">
                <div className="gallery__details">
                    <p className="gallery__place-origin">Place of Origin</p>
                    <p className="gallery__medium">Medium</p>
                    <p className="gallery__dimensions">Dimensions</p>
                    <p className="galler__credit-line">Credit Line</p>
                </div>
                <div className="gallery__auction">
                    <p className="gallery__countdown">Countdown</p>
                    <p className="gallery__bid-price">Price</p>
                    <p className="gallery__place-bid">Place a bid</p>
                </div>
            </div>
            <div className="gallery__section gallery__section--navigate">
                <GalleryNav direction={"left"} />
                <GalleryNav direction={"right"} />
            </div>
        </div>
    )
};

export default Gallery;
