import { useEffect, useState } from "react";
import { AuctionAPI } from "../../apis/auctionAPI";
import { formatPrice } from "../../utils/utils";
import "./BidInfo.scss";

function BidInfo({ auctionId, currentPrice, askPrice, watchers }) {
    const [bidList, setBidList] = useState([
        {time: 0, bid: 100},
        {time: 1, bid: 200},
        {time: 10, bid: 250},
    ]);
    

    // useEffect(() => {
    //     try {
    //         const bidData = AuctionAPI.getBids(auctionId);
    //         setBidList(bidData);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }, [currentPrice]);

    return (
        <section className="lot__bid-info">
            <div className="lot__current-price">
                <h2 className="lot__current-price-text">
                    { currentPrice ? "Current Price" : "Starting Bid" }
                </h2>
                <h2 className="lot__current-price-number">
                    { formatPrice(currentPrice || askPrice) }
                </h2>
            </div>
            <p className="lot__watchers">{watchers ? `${watchers} watchers`:""}</p>
            <div className="lot__bid-score-board">
                <div className="lot__bid-score-board--row">
                    <span className="lot__bid-score-board--time">time</span>
                    <span>bid</span>
                </div>
                { bidList.map((bid, idx) => (
                    <div key={idx} className="lot__bid-score-board--row">   
                        <div className="lot__bid-score-board--time">{bid.time}</div>
                        <div>{bid.bid}</div>
                    </div> 
                ))}
            </div>
        </section>
    )
};

export default BidInfo;
