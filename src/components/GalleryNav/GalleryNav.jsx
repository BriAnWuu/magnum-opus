import { motion } from "framer-motion";
import "./GalleryNav.scss";

function GalleryNav({ artworksLength, setImageIndex, direction }) {
    
    const navigationHandler = () => {
        if (direction === 'right') {
            setImageIndex(prev => (prev + 1) % artworksLength);
        } else {
            setImageIndex(prev => (prev - 1 + artworksLength) % artworksLength);
        }
    }
    
    return (
        <motion.div 
            className="gallery__navigate-icon"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigationHandler()}
        >
            { direction === "left" ? 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                </svg> :
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                </svg>
            }
        </motion.div>
    )
};

export default GalleryNav;
