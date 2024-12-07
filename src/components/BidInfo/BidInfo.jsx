import { formatPrice, formatTimeHumanReadable } from "../../utils/utils";
import Countdown from "../Countdown/Countdown";
import "./BidInfo.scss";

function BidInfo({
    currentPrice, 
    askPrice, 
    watchers,
    open_at, 
    close_at,
    bidList
}) {

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
            { watchers > 0 && 
                <p className="lot__watchers">
                    {`${watchers} watcher${ watchers === 1 ? "":"s" }`}
                </p>
            }
            <div className="lot__bid-score-board">
                <div className="lot__bid-score-board--row">
                    <span className="lot__bid-score-board--time lot__board-header">Time</span>
                    <span className="lot__board-header">Bid</span>
                </div>
                { bidList?.map((bid, idx) => (
                    <div key={idx} className="lot__bid-score-board--row">   
                        <div className="lot__bid-score-board--time lot__board-body">
                            {formatTimeHumanReadable(new Date(bid.created_at).getTime())}
                        </div>
                        <div className="lot__board-body">{formatPrice(bid.amount)}</div>
                    </div> 
                ))}
            </div>
            <div className="lot__countdown-timer">
                <p>Ends in:&nbsp;</p>
                <Countdown 
                    open_at={open_at} 
                    close_at={close_at}
                    className={ "countdown-value--bid" } 
                />
            </div>
        </section>
    )
};

export default BidInfo;
