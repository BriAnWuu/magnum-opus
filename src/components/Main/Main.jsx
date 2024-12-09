import { useEffect, useState } from "react";
import { ArtworksAPI } from "../../apis/artworksAPI";
import Discover from "../Discover/Discover";
import Gallery from "../Gallery/Gallery";
import "./Main.scss";


function Main(prop) {

    const [galleryArtworks, setGalleryArtworks] = useState([]);
    const [discoverArtworks, setDiscoverArtworks] = useState([]);

    useEffect(() => {
        ArtworksAPI.getAll("main")
        .then((artworks) => {
            setGalleryArtworks(artworks.slice(0, 7))
            setDiscoverArtworks(artworks.slice(7))
        })
        .catch((error) => {
            console.error(error)
        });
    }, []);

    return (
        <>
            <Gallery galleryArtworks={galleryArtworks} />
            <Discover discoverArtworks={discoverArtworks} />
        </>
    )
};

export default Main;
