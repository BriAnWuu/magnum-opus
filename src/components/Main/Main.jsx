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

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import GalleryImage from "../GalleryImage/GalleryImage";
import Test from "../Test/Test";
import "./Main.scss";


function Main(prop) {
    const testImages = [ testImg1, testImg2, testImg3, testImg4, testImg5, testImg6, testImg7, testImg8, testImg9, testImg10, testImg11, testImg12 ];
    // console.log(testImages.length);



    return (
        <>
            <div className="gallery">
                <div className="gallery__frame">
                    <div className="gallery__image-container">
                        { testImages.map(image => (
                            <GalleryImage key={ image } image={image} />
                        )) }
                    </div>
                </div>
                <section className="gallery__title-description">
                    <h2 className="gallery__title">Title</h2>
                    <p className="gallery__year">Year</p>
                    <p className="gallery__artist">Artist</p>
                    <p className="gallery__description">Description</p>
                </section>
                <div className="gallery__info">
                    <div className="gallery__details">
                        <p className="gallery__place-origin">Place of Origin</p>
                        <p className="gallery__medium">Medium</p>
                        <p className="gallery__dimensions">Dimensions</p>
                    </div>
                    <div className="gallery__auction">
                        <p className="gallery__countdown">Countdown</p>
                        <p className="gallery__bid-price">Price</p>
                        <p className="gallery__place-bid">Place a bid</p>
                    </div>
                </div>
                <div className="gallery__navigate">
                    <div className="gallery__navigate-left">Left</div>
                    <div className="gallery__navigate-right">Right</div>
                </div>
            </div>
            
            {/* <Test /> */}
        </>
    )
};

export default Main;
