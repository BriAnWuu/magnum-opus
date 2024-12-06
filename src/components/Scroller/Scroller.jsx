import { motion } from "framer-motion";
import { animate } from "motion";
import { useMotionValue } from "motion/react";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import ScrollerItem from "../ScrollerItem/ScrollerItem";
import "./Scroller.scss";

function Scroller({ discoverArtworks }) {
    
    const FAST_DURATION = 30;
    const SLOW_DURATION = 60;
    const [duration, setDuration] = useState(FAST_DURATION);

    const [scrollerRef, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);

    const [finishLoop, setFinishLoop] = useState(false);
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        let scrollerLoop;
        const duplicationTriggerPoint = -width / 2 - 8;

        if (finishLoop) {
            scrollerLoop = animate(xTranslation, [xTranslation.get(), duplicationTriggerPoint], {
                ease: "linear",
                duration: duration * (1 - xTranslation.get() / duplicationTriggerPoint),
                onComplete: () => {
                    setFinishLoop(false);
                    setRerender(prev => !prev);
                }
            });
        } else {
            scrollerLoop = animate(xTranslation, [0, duplicationTriggerPoint], {
                ease: "linear",
                duration: duration,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
            });
        }

        return scrollerLoop?.stop;
    }, [xTranslation, width, duration, rerender]);


    return (
        <div className="discover__scroller-container">
            <motion.ul 
                className="discover__scroller" 
                ref={scrollerRef} 
                style={{x: xTranslation}}
                onHoverStart={() => {
                    setFinishLoop(true);
                    setDuration(SLOW_DURATION);
                }}
                onHoverEnd={() => {
                    setFinishLoop(true);
                    setDuration(FAST_DURATION);
                }}
            >
                { [...discoverArtworks, ...discoverArtworks].map((artwork, idx) => (
                    <ScrollerItem key={ idx } artwork={ artwork } />
                )) }
            </motion.ul>
        </div>
    )
};

export default Scroller;
