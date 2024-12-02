import "./LotMainInfo.scss";

function LotMainInfo({ auctionId, artist, title, medium, dimension }) {
    return (
        <section className="lot__main-info"> 
            {/* medium */}
            <h1 className="lot__lot-number">{`Lot ${auctionId}`}</h1>
            {/* large */}
            <h2 className="lot__artist-name">{artist}</h2>
            {/* large italic */}
            <h3 className="lot__artwork-title">{title}</h3>
            {/* small */}
            <p className="lot__medium">{medium}</p>
            <p className="lot__dimension">{dimension}</p>
        </section>
    )
};

export default LotMainInfo;
