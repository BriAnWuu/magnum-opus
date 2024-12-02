import { motion } from "framer-motion";
import "./ScrollerItem.scss";

function ScrollerItem({ image }) {
    return (
        <li className="discover__scroller-item">
            <motion.img 
                className="discover__scroller-image"
                src={ image } 
                alt="" 
            />
        </li>
    )
};

export default ScrollerItem;
