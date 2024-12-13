import { useEffect, useState } from "react";
import { ArtworksAPI } from "../../apis/artworksAPI";
import FeatureGallery from "../../components/FeatureGallery/FeatureGallery";
import { divideArtworks } from "../../utils/utils";
import "./ArtworkPage.scss";

function ArtworkPage(prop) {
    const [artworkGroups, setArtworkGroups] = useState([]);

    useEffect(() => {
        ArtworksAPI.getAll()
        .then((artworksData) => {
            if (artworksData.length > 0) {
                setArtworkGroups(divideArtworks(artworksData, 7));
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);


    return (
        <main className="artwork">
            <h1>Featured Galleries</h1>
            { artworkGroups?.map((group, idx) => (
                <FeatureGallery key={idx} index={idx} artworks={group} />
            ))}
        </main>
    )
};

export default ArtworkPage;
