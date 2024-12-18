import { convertBC } from "../../utils/utils";
import "./LotMainInfo.scss";

function LotMainInfo({ 
    auctionId, 
    artist, 
    title,
    date_start,
    date_end, 
    medium, 
    dimension 
}) {
    return (
        <section className="lot__main-info"> 
            {/* medium */}
            <h1 className="lot__lot-number">{`Lot ${auctionId}`}</h1>
            {/* large */}
            <h2 className="lot__artist-name">
                { artist || "Unknown Artist" }
            </h2>
            {/* large italic */}
            <h2 className="lot__artwork-title">
                <span>{ title || "Unknown Title" },</span>
                {` ${convertBC(date_start)} ${ date_start === date_end ? 
                    "" : ` - ${convertBC(date_end)}`}`
                }
            </h2>
            {/* small */}
            <p className="lot__medium">{ medium || "Unkown Medium" }</p>
            <p className="lot__dimension">{ dimension || "Unknown Dimensions" }</p>
        </section>
    )
};

export default LotMainInfo;
