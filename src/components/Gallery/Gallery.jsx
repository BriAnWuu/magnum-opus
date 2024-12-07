import parse from "html-react-parser";
import { useState } from "react";
import { convertBC, formatPrice, getCurrentPrice } from "../../utils/utils";
import Countdown from "../Countdown/Countdown";
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
                    <GalleryImage 
                        imageId={ galleryArtworks[imageIndex]?.id }
                        imageAlt={ galleryArtworks[imageIndex]?.alt_text } 
                    />
                </div>
            </div>
            <div className="gallery__section gallery__section--title">
                <div className="gallery__title-inner-container">
                    <h2 className="gallery__title">{ galleryArtworks[imageIndex]?.title }</h2>
                    <p className="gallery__year">
                        { convertBC(galleryArtworks[imageIndex]?.date_start) }
                        { galleryArtworks[imageIndex]?.date_start === galleryArtworks[imageIndex]?.date_end ?
                            "" :
                            ` - ${ convertBC(galleryArtworks[imageIndex]?.date_end) }`
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
            </div>
            <div className="gallery__section gallery__section--info">
                <div className="gallery__details">
                    <p className="gallery__place-origin">Place</p>
                    <p className="gallery__medium">Medium</p>
                    <p className="gallery__dimensions">Dimensions</p>
                    <p className="galler__credit-line">Credit Line</p>
                </div>
                <div className="gallery__details gallery__details--value">
                    <div className="gallery__details-inner-container">
                        <p className="gallery__place-origin">{ galleryArtworks[imageIndex]?.place_of_origin }</p>
                        <p className="gallery__medium">{ galleryArtworks[imageIndex]?.medium_display }</p>
                        <p className="gallery__dimensions">{ galleryArtworks[imageIndex]?.dimensions }</p>
                        <p className="galler__credit-line">{ galleryArtworks[imageIndex]?.credit_line }</p>
                    </div>
                </div>
                <div className="gallery__auction">
                    <p className="gallery__countdown">Ending in</p>
                    <p className="gallery__bid-price">Price</p>
                    <p className="gallery__place-bid">Place a bid</p>
                </div>
                <div className="gallery__auction">
                    <Countdown
                        open_at={galleryArtworks[imageIndex]?.open_at}
                        close_at={galleryArtworks[imageIndex]?.close_at}
                        className={ "countdown-value--home" }
                    />
                    <p className="gallery__bid-price">
                        { galleryArtworks[imageIndex]?.ask_price && 
                            formatPrice(
                                getCurrentPrice(
                                    galleryArtworks[imageIndex]?.ask_price, 
                                    galleryArtworks[imageIndex]?.leading_bid_price
                            )) 
                        }
                    </p>
                </div>
            </div>
            <div className="gallery__section gallery__section--navigate">
                <Dots
                    galleryArtworks={galleryArtworks} 
                    imageIndex={imageIndex} 
                    setImageIndex={setImageIndex} 
                /> 
                <GalleryNav 
                    direction={"left"} 
                    artworksLength={galleryArtworks.length}
                    setImageIndex={setImageIndex} 
                />
                <GalleryNav 
                    direction={"right"}
                    artworksLength={galleryArtworks.length}
                    setImageIndex={setImageIndex} 
                />
            </div>
        </div>
    )
};

export default Gallery;
