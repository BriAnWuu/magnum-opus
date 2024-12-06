import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "./ScrollerItem.scss";

function ScrollerItem({ artwork }) {
    const [showOverlay, setShowOverlay] = useState(false);
    
    return (
        <motion.li 
            className="discover__scroller-item"
            onHoverStart={() => setShowOverlay(true)}
            onHoverEnd={() => setShowOverlay(false)}
        >
            <AnimatePresence>
                { showOverlay && (
                    <motion.div 
                        className="discover__item-overlay-container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0}}
                    >
                        <div className="discover__item-overlay" />
                        <motion.h3 
                            className="discover__explore-text"
                            initial={{ y: 10 }}
                            animate={{ y: 0 }}
                            exit={{ y: 10 }}
                        >
                            <span>Explore</span>
                        </motion.h3>
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.img 
                className="discover__scroller-image"
                src={ `${import.meta.env.VITE_APP_IMG_BASE_URL}/${artwork.id}.jpg` } 
                alt={ artwork.alt_text } 
            />
        </motion.li>
    )
};

export default ScrollerItem;
