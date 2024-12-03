import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArtworksAPI } from "../../apis/artworksAPI";
import { AuctionAPI } from "../../apis/auctionAPI";
import testImg1 from "../../assets/896.jpg";
import AboutTheWork from "../../components/AboutTheWork/AboutTheWork";
import ArtworkImage from "../../components/ArtworkImage/ArtworkImage";
import BidForm from "../../components/BidForm/BidForm";
import BidInfo from "../../components/BidInfo/BidInfo";
import LotMainInfo from "../../components/LotMainInfo/LotMainInfo";
import "./BidPage.scss";

function BidPage() {
    const { auctionId } = useParams();
    const [auctionDetail, setAuctionDetail] = useState({});
    const [artworkDetail, setArtworkDetail] = useState({});

    const [currentPrice, setCurrentPrice] = useState(100)

    // api get auction by id
    useEffect(() => {
        AuctionAPI.get(auctionId).then((auctionData) => {
            setAuctionDetail(auctionData);        
        });
    }, [])

    // api get artwork by artwork_id
    useEffect(() => {
        ArtworksAPI.get(auctionDetail.artwork_id).then((artworkData) => {
            setArtworkDetail(artworkData);
        });
    }, [auctionDetail])
    
    return (
        <div className="lot">
            <div className="lot__left-column">
                <ArtworkImage image={testImg1} />
                <AboutTheWork description={"Description\nDescription\nDescription\n"} provenance={"Provenance\nProvenance\nProvenance\n"} />
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
                    askPrice={750}
                    watchers={2}
                />
                <BidForm
                    askPrice={100}
                    currentPrice={currentPrice}
                />
            </div>
        </div>
    )
};

export default BidPage;
