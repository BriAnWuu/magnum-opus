import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import MaskedInput from "react-text-mask";
import { createNumberMask } from "text-mask-addons";
import { BidAPI } from "../../apis/bidAPI";
import { formatPrice } from "../../utils/utils";
import "./BidForm.scss";

function BidForm({ auctionId, askPrice, currentPrice, setFetchBid }) {
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

        setBidPrice(currentPrice);
    }, [currentPrice]);

    const bidIncrementHandler = (price) => {
        setBidPrice(prev => (+prev + price))
    }

    const bidChangeHandler = (event) => {
        setBorderRed(false);
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
            user_id: +user_id,
            amount: bidPirce,
            buyer: true,
            watching: auctionId,
        }).then((statusCode) => {
            console.log(statusCode);
        }).catch((error) => {
            console.error(error)
        });

        setFetchBid(prev => !prev);
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

    const ctaVariants = {
        initial: { y: 0, scale: 1 },
        jump: { y: -5 },
        shrink: { scale: 0.9 },
    }

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
                autoComplete="off"
            />
            <div className="lot__increment-cta-container">
                <motion.button
                    className="lot__cta"
                    type="button"
                    onClick={() => bidIncrementHandler(ctaLabel.button1)}
                    variants={ctaVariants}
                    initial="initial"
                    whileHover="jump"
                    exit="initial"
                >
                    {`+ ${formatPrice(ctaLabel.button1)}`}
                </motion.button>
                <motion.button
                    className="lot__cta"
                    type="button"
                    onClick={() => bidIncrementHandler(ctaLabel.button2)}
                    variants={ctaVariants}
                    initial="initial"
                    whileHover="jump"
                    exit="initial"
                >
                    {`+ ${formatPrice(ctaLabel.button2)}`}
                </motion.button>
                <motion.button
                    className="lot__cta"
                    type="button"
                    onClick={() => bidIncrementHandler(ctaLabel.button3)}
                    variants={ctaVariants}
                    initial="initial"
                    whileHover="jump"
                    exit="initial"
                >
                    {`+ ${formatPrice(ctaLabel.button3)}`}
                </motion.button>
            </div>
            <motion.button 
                className="lot__cta lot__cta--submit" 
                type="submit"
                variants={ctaVariants}
                initial="initial"
                whileHover="jump"
                exit="initial"
            >
                Bid
            </motion.button>
        </form>
    )
};

export default BidForm;
