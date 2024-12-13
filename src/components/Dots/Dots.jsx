import { motion } from "framer-motion";
import "./Dots.scss";

function Dots({ galleryArtworks, imageIndex, setImageIndex }) {
    return (
        <motion.div 
            className="gallery__dots-container"
            style={{opacity: 0.5}}
            whileHover={{opacity: 0.9}}
        >
            { galleryArtworks.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setImageIndex(idx)}
                    className={`gallery__dot ${idx === imageIndex ? "gallery__dot--select":""}`}
                />
            ))}
        </motion.div>
    )
};

export default Dots;
