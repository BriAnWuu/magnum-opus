import { motion } from "framer-motion";
import { useState } from "react";
import "./ScrollerItem.scss";

function ScrollerItem({ image }) {
    const [showOverlay, setShowOverlay] = useState(false);
    
    return (
        <li className="discover__scroller-item">
            showOverlay
            <motion.img 
                className="discover__scroller-image"
                src={ image } 
                alt="" 
            />
        </li>
    )
};

export default ScrollerItem;
