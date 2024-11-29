import { AnimatePresence, easeIn, motion, useAnimate, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./GalleryImage.scss";


function GalleryImage({ image }) {

    const [imageRef, animate] = useAnimate();
    const inView = useInView(imageRef, { amount: 0.5 });

    useEffect(() => {
        if(inView) {
            animate(
                imageRef.current, 
                {
                    opacity: 1,
                    scale: 1
                },
                {
                    duration: 3,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 80
                }
            )
        } else {
            animate(
                imageRef.current,
                {
                    opacity: 0,
                    scale: 0.3
                },
                {
                    duration: 3,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 80
                }
            )
        }
    }, [inView])
    
    return (
        <>
            <motion.img 
                className="gallery__image" 
                src={image} 
                ref={imageRef}
                initial={{
                    opacity: 0,
                    scale: 0.3
                }}                    
            />

        </>
    )
};

export default GalleryImage;
