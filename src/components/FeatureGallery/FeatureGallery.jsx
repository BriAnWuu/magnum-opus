import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { convertBC } from "../../utils/utils";
import "./FeatureGallery.scss";

function FeatureGallery({ index, artworks }) {
    const navigate = useNavigate();
    return (
        <section className="artwork__feature-gallery">
            <h2>Featuring Gallery {+index + 1}</h2>
            <div className="artwork__scroller">
                <div className="artwork__item-container">
                    { artworks.map((artwork, idx) => 
                        <article key={idx} className="artwork__item">
                            <motion.img
                                className="artwork__item-image"
                                src={ `${import.meta.env.VITE_APP_IMG_BASE_URL}/${artwork.id}.jpg` } 
                                alt={ artwork.alt_text }
                                initial={{ y: 0 }}
                                whileHover={{ 
                                    y: -20,
                                    transition: {
                                        type: "spring",
                                        damping: 10,
                                    } 
                                }}
                                exit={{ y: 0 }}
                                onClick={() => navigate(`/artwork/${artwork.id}`)}
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
