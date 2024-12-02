import useMeasure from "react-use-measure";
import testImg6 from "../../assets/28136.jpg";
import testImg7 from "../../assets/28354.jpg";
import testImg8 from "../../assets/28790.jpg";
import testImg2 from "../../assets/3302.jpg";
import testImg9 from "../../assets/36171.jpg";
import testImg10 from "../../assets/39479.jpg";
import testImg11 from "../../assets/40724.jpg";
import testImg12 from "../../assets/40811.jpg";
import testImg3 from "../../assets/4092.jpg";
import testImg4 from "../../assets/4594.jpg";
import testImg5 from "../../assets/5391.jpg";
import testImg1 from "../../assets/896.jpg";

import { motion } from "framer-motion";
import { animate } from "motion";
import { useMotionValue } from "motion/react";
import { useEffect } from "react";
import ScrollerItem from "../ScrollerItem/ScrollerItem";
import "./Scroller.scss";

function Scroller(prop) {
    const testImages = [ testImg1, testImg2, testImg3, testImg4, testImg5, testImg6, testImg7, testImg8, testImg9, testImg10, testImg11, testImg12 ];

    // inner scroller translate
    // 20s linear infinite
    const [scrollerRef, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);

    useEffect(() => {
        const duplicationTriggerPoint = -width / 2 - 8;

        const scrollerLoop = animate(xTranslation, [0, duplicationTriggerPoint], {
            ease: "linear",
            duration: 35,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
        });

        return scrollerLoop.stop;
    }, [xTranslation, width]);


    return (
        <div className="discover__scroller-container">
            <motion.ul className="discover__scroller" ref={scrollerRef} style={{x: xTranslation}}>
                { [...testImages, ...testImages].map((image, idx) => (
                    <ScrollerItem key={ idx } image={ image } />
                )) }
            </motion.ul>
        </div>
    )
};

export default Scroller;
