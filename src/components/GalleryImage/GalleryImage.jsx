import { motion } from "framer-motion";

import "./GalleryImage.scss";


function GalleryImage({ imageId, imageAlt }) {
    
    return (
        <>
            <motion.img 
                className="gallery__image" 
                src={`${import.meta.env.VITE_APP_IMG_BASE_URL}/${imageId}.jpg`}
                alt={imageAlt}              
            />

        </>
    )
};

export default GalleryImage;
