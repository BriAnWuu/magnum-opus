import { motion } from "framer-motion";
import Scroller from "../Scroller/Scroller";
import "./Discover.scss";

function Discover({ discoverArtworks }) {

    const titleAnimate = {
        hidden: { opacity: 0, y: "100px" },
        show: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 1,
                ease: "easeIn",
            }
        }
    }

    const subtitleAnimate = {
        hidden: { opacity: 0, scale: 0.3},
        show: { 
            opacity: 1, 
            scale: 1,
            transition: {
                delay: 1.5,
                duration: 2,
                ease: "easeIn",
                type: "spring",
            }
        }
    }

    return (
        <section className="discover">
            <motion.h2 
                className="discover__title"
                variants={titleAnimate}
                initial="hidden"
                whileInView="show"
            >
                Discover Our Collections:&nbsp;
                <motion.span 
                    className="discover__subtitle"
                    variants={subtitleAnimate}
                    initial="hidden"
                    whileInView="show"
                >
                    The Hidden Gem&nbsp;
                    <motion.span
                        variants={subtitleAnimate}
                        initial="hidden"
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            transition: {
                                delay: 2.5,
                                duration: 2,
                                ease: "easeIn",
                            }
                        }}
                    >
                        Awaits
                    </motion.span>
                </motion.span>
            </motion.h2>

            <Scroller />
        </section>
    )
};

export default Discover;
