import { useEffect, useState } from "react";
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


import { ArtworksAPI } from "../../apis/artworksAPI";
import Discover from "../Discover/Discover";
import Gallery from "../Gallery/Gallery";
import Test from "../Test/Test";
import "./Main.scss";


function Main(prop) {
    const testImages = [ testImg1, testImg2, testImg3, testImg4, testImg5, testImg6, testImg7, testImg8, testImg9, testImg10, testImg11, testImg12 ];

    const [galleryArtworks, setGalleryArtworks] = useState([]);
    const [discoverArtworks, setDiscoverArtworks] = useState([]);

    useEffect(() => {
        ArtworksAPI.getAll("main")
        .then((artworks) => {
            setGalleryArtworks(JSON.parse(JSON.stringify(artworks.slice(0, 7))))
            setDiscoverArtworks(JSON.parse(JSON.stringify(artworks.slice(7))))
        })
        .catch((error) => {
            console.error(error)
        });
    }, []);

    return (
        <>
            <Gallery galleryArtworks={galleryArtworks} />
            <Discover discoverArtworks={discoverArtworks} />
            {/* <Test /> */}
        </>
    )
};

export default Main;
