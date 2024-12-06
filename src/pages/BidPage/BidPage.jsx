import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArtworksAPI } from "../../apis/artworksAPI";
import { AuctionAPI } from "../../apis/auctionAPI";
import testImg1 from "../../assets/896.jpg";
import AboutTheWork from "../../components/AboutTheWork/AboutTheWork";
import ArtworkImage from "../../components/ArtworkImage/ArtworkImage";
import BidForm from "../../components/BidForm/BidForm";
import BidInfo from "../../components/BidInfo/BidInfo";
import FollowButton from "../../components/FollowButton/FollowButton";
import LotMainInfo from "../../components/LotMainInfo/LotMainInfo";
import "./BidPage.scss";

function BidPage() {
    const { artworkId } = useParams();
    const [auctionDetail, setAuctionDetail] = useState({});
    const [artworkDetail, setArtworkDetail] = useState({});

    const [currentPrice, setCurrentPrice] = useState(10_000)

    // api get auction by id
    useEffect(() => {
        AuctionAPI.get(artworkId)
        .then((auctionData) => {
            setAuctionDetail(auctionData);        
        })
        .catch((error) => {
            console.error(error)
        });
    }, [])

    // api get artwork by artwork_id
    useEffect(() => {
        ArtworksAPI.get(artworkId)
        .then((artworkData) => {
            setArtworkDetail(artworkData);
        })
        .catch((error) => {
            console.error(error)
        });
    }, [auctionDetail])
    
    return (
        <div className="lot">
            <div className="lot__left-column">
                <ArtworkImage image={testImg1} />
                <AboutTheWork description={"Description"} provenance={"Provenance"} />
            </div>
            <div className="lot__right-column">
                <LotMainInfo 
                    auctionId={1} 
                    artist={"Claude Monet"} 
                    title={"Water Lily"} 
                    medium={"Oil on canvas"} 
                    dimension={"10 x 10cm"} 
                />
                <BidInfo 
                    auctionId={1} 
                    currentPrice={null}
                    askPrice={1_000}
                    watchers={2}
                />
                <BidForm
                    auctionId={1}
                    currentPrice={currentPrice}
                    askPrice={1_000}
                />
                <FollowButton auctionId={1} />
            </div>
        </div>
    )
};

export default BidPage;
