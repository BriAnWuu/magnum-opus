import { motion } from "framer-motion";

import "./GalleryImage.scss";


function GalleryImage({ imageId, imageAlt }) {
    
    return (
        <>
            <motion.img 
                className="gallery__image" 
                src={`${import.meta.env.VITE_APP_IMG_BASE_URL}/${imageId}.jpg`}
                alt={imageAlt} 
                // ref={imageRef}
                initial={{
                    opacity: 0,
                    scale: 0.3
                }}
                animate={{
                    opacity: 1,
                    scale: 1
                }}                    
            />

        </>
    )
};

export default GalleryImage;
