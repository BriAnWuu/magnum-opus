import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuctionAPI } from "../../apis/auctionAPI";
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
    const [bidList, setBidList] = useState([]);
    const [currentPrice, setCurrentPrice] = useState(0);
    const [fetchBid, setFetchBid] = useState(false);
    const [fetchAuction, setFetchAuction] = useState(false);

    // api get auction by id
    useEffect(() => {
        AuctionAPI.get(artworkId)
        .then((auctionData) => {
            setAuctionDetail(auctionData);       
        })
        .catch((error) => {
            console.error(error)
        });
    }, [fetchAuction]);

    // api get bid data
    useEffect(() => {
        if (auctionDetail) {
            AuctionAPI.getBids(auctionDetail.id)
            .then((bidData) => {
                setBidList(bidData);

                if (bidData.length > 0) {
                    setCurrentPrice(bidData[bidData.length - 1].amount)
                } else {
                    setCurrentPrice(auctionDetail.ask_price)
                }
            })
            .catch((error) => {
                console.error(error)
            });
        }
    }, [auctionDetail, fetchBid]);
    
    return (
        <div className="lot">
            <div className="lot__left-column">
                <ArtworkImage 
                    imageId={ auctionDetail?.artwork_id } 
                    alt_text={ auctionDetail?.alt_text }
                />
                <AboutTheWork 
                    description={ auctionDetail?.description } 
                    provenance={ auctionDetail?.provenance_text } 
                />
            </div>
            <div className="lot__right-column">
                <LotMainInfo 
                    auctionId={ auctionDetail?.id } 
                    artist={ auctionDetail?.artist_title } 
                    title={ auctionDetail?.title } 
                    date_start={ auctionDetail?.date_start }
                    date_end={ auctionDetail?.date_end }
                    medium={ auctionDetail?.medium_display } 
                    dimension={ auctionDetail?.dimensions } 
                />
                <BidInfo 
                    auctionId={ auctionDetail?.id } 
                    currentPrice={ currentPrice }
                    askPrice={ auctionDetail?.ask_price }
                    watchers={ auctionDetail?.watchers?.length }
                    open_at={ auctionDetail?.open_at }
                    close_at={ auctionDetail?.close_at }
                    bidList={ bidList }
                />
                <BidForm
                    auctionId={ auctionDetail?.id }
                    currentPrice={ currentPrice }
                    askPrice={ auctionDetail?.ask_price }
                    setFetchBid={ setFetchBid }
                />
                <FollowButton 
                    auctionId={ auctionDetail?.id } 
                    setFetchAuction={ setFetchAuction }
                />
            </div>
        </div>
    )
};

export default BidPage;
