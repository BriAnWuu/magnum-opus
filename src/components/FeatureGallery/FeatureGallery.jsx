import { convertBC } from "../../utils/utils";
import "./FeatureGallery.scss";

function FeatureGallery({ index, artworks }) {
    return (
        <section className="artwork__feature-gallery">
            <h2>Featuring Gallery {+index + 1}</h2>
            <div className="artwork__scroller">
                <div className="artwork__item-container">
                    { artworks.map((artwork, idx) => 
                        <article key={idx} className="artwork__item">
                            <img
                                className="artwork__item-image"
                                src={ `${import.meta.env.VITE_APP_IMG_BASE_URL}/${artwork.id}.jpg` } 
                                alt={ artwork.alt_text }
                            />
                            <h3 className="artwork__item-artist">
                                { artwork.artist_title || "Unknown Artist" }
                            </h3>
                            <h3 className="artwork__item-title">
                                <span>{`${ artwork.title || "Unknown Title" }, `}</span> 
                                { convertBC(artwork.date_end) || "Year Unknown"}
                            </h3>
                        </article>
                    )}
                </div>
            </div>
        </section>
    )
};

export default FeatureGallery;
