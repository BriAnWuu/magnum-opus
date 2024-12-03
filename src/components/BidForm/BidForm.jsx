import { useEffect, useState } from "react";
import { formatPrice } from "../../utils/utils";
import "./BidForm.scss";

function BidForm({ askPrice, currentPrice }) {
    const [bidPirce, setBidPrice] = useState(currentPrice || askPrice);
    const [ctaLabel, setCtaLabel] = useState({});
    
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
        setBidPrice(+event.target.value || "")
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
    
    const submitHandler = (event) => {
        event.preventDefault();
        
        const minBid = (currentPrice || askPrice) + ctaLabel.button1;

        if (bidPirce < minBid || bidPirce === "") {
            console.warn(`Your bid is lower than minimum bid ${formatPrice(minBid)}`)
            return
        }

        // api post bid
    }

    return (
        <form onSubmit={submitHandler}>
            <label className="lot__form-label" htmlFor="inputBid">Place a Bid</label>
            <input
                className="lot__form-input"
                type="number" 
                id="inputBid" 
                placeholder={`ask price $${askPrice}`} 
                onWheel={preventChangeOnWheel}
                onChange={bidChangeHandler}
                value={bidPirce}
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
