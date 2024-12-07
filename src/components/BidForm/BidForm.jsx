import { useEffect, useState } from "react";
import MaskedInput from "react-text-mask";
import { createNumberMask } from "text-mask-addons";
import { BidAPI } from "../../apis/bidAPI";
import { UserAPI } from "../../apis/userAPI";
import { formatPrice } from "../../utils/utils";
import "./BidForm.scss";

function BidForm({ auctionId, askPrice, currentPrice }) {
    const [bidPirce, setBidPrice] = useState(currentPrice || askPrice);
    const [ctaLabel, setCtaLabel] = useState({});
    const [borderRed, setBorderRed] = useState(false);
    
    useEffect(() => {
        if (currentPrice < 1_000) {
            setCtaLabel({
                button1: 10,
                button2: 50,
                button3: 100,
            });
        } else if (currentPrice < 10_000) {
            setCtaLabel({
                button1: 100,
                button2: 500,
                button3: 1_000,
            });
        } else if (currentPrice < 100_000) {
            setCtaLabel({
                button1: 1_000,
                button2: 5_000,
                button3: 10_000,
            });
        } else {
            setCtaLabel({
                button1: 10_000,
                button2: 50_000,
                button3: 100_000,
            });
        }
    }, [currentPrice]);


    const bidIncrementHandler = (price) => {
        setBidPrice(prev => (+prev + price))
    }

    const bidChangeHandler = (event) => {
        const rawValue = event.target.value
            .replace(/[^0-9.]/g, '') // Remove everything except numbers and decimals
            .replace(/^0+(?=\d)/, ''); // Prevent leading zeroes
        setBidPrice(rawValue || "");
    }

    const preventChangeOnWheel = (event) => {
        // Prevent the input value change
        event.target.blur()
    
        // Prevent the page/container scrolling
        event.stopPropagation()
    
        // Refocus immediately, on the next tick (after the current function is done)
        setTimeout(() => {
            event.target.focus()
        }, 0)
    }
    
    const submitHandler = async (event) => {
        sessionStorage.setItem("user_id", 2);
        
        event.preventDefault();
        
        const minBid = (currentPrice || askPrice) + ctaLabel.button1;

        if (bidPirce < minBid || bidPirce === "") {
            console.warn(`Your bid is lower than minimum bid ${formatPrice(minBid)}`);
            setBorderRed(true);
            return
        }

        const user_id = sessionStorage.getItem("user_id");

        // api post bid
        await BidAPI.postBid({
            auction_id: auctionId,
            user_id: user_id,
            amount: bidPirce,
        }).then((statusCode) => {
            console.log(statusCode);
        }).catch((error) => {
            console.error(error)
        });

        // api update user
        await UserAPI.update(user_id, {
            buyer: true,
            watching: auctionId,
        }).then((statusCode) => {
            console.log(statusCode);
        }).catch((error) => {
            console.error(error)
        });
    }

    const currencyMask = createNumberMask({
        prefix: '$', // Prefix for currency
        suffix: '', // Suffix, if needed (e.g., " USD")
        includeThousandsSeparator: true, // Add commas as thousands separators
        thousandsSeparatorSymbol: ',', // Symbol for the separator
        allowDecimal: false, // Allow decimal places
        allowNegative: false, // Disallow negative numbers
        allowLeadingZeroes: false, // Disallow leading zeroes
    });

    return (
        <form onSubmit={submitHandler} className="lot__form">
            <label className="lot__form-label" htmlFor="inputBid">Place a Bid</label>
            <MaskedInput
                className={`lot__form-input ${borderRed ? "lot__form-input--error":""}`}
                mask={currencyMask}
                id="inputBid" 
                placeholder={`ask price ${formatPrice(askPrice)}`} 
                onWheel={preventChangeOnWheel}
                onChange={bidChangeHandler}
                value={bidPirce}
                onBlur={() => setBorderRed(false)}
            />
            <div className="lot__increment-cta-container">
                <button
                    className="lot__cta"
                    type="button"
                    onClick={() => bidIncrementHandler(ctaLabel.button1)}
                >
                    {`+ ${formatPrice(ctaLabel.button1)}`}
                </button>
                <button
                    className="lot__cta"
                    type="button"
                    onClick={() => bidIncrementHandler(ctaLabel.button2)}
                >
                    {`+ ${formatPrice(ctaLabel.button2)}`}
                </button>
                <button
                    className="lot__cta"
                    type="button"
                    onClick={() => bidIncrementHandler(ctaLabel.button3)}
                >
                    {`+ ${formatPrice(ctaLabel.button3)}`}
                </button>
            </div>
            <button className="lot__cta lot__cta-submit" type="submit">Bid</button>
        </form>
    )
};

export default BidForm;
