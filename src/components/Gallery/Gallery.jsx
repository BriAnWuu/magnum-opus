import GalleryImage from "../GalleryImage/GalleryImage";
import GalleryNav from "../GalleryNav/GalleryNav";
import "./Gallery.scss";

function Gallery({ galleryArtworks }) {
    return (
        <div className="gallery">
            <div className="gallery__frame">
                <div className="gallery__image-container">
                    { galleryArtworks.map(image => (
                        <GalleryImage key={ image.id } imageId={ image.id } />
                    )) }
                </div>
            </div>
            <section className="gallery__section gallery__section--title">
                <h2 className="gallery__title">Title</h2>
                <p className="gallery__year">Year</p>
                <p className="gallery__artist">Artist</p>
                <p className="gallery__description">Description</p>
            </section>
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
