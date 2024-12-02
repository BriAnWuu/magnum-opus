import { useParams } from "react-router-dom";
import testImg1 from "../../assets/896.jpg";
import AboutTheWork from "../../components/AboutTheWork/AboutTheWork";
import ArtworkImage from "../../components/ArtworkImage/ArtworkImage";
import LotMainInfo from "../../components/LotMainInfo/LotMainInfo";
import "./BidPage.scss";

function BidPage() {
    const { auctionId } = useParams();
    
    // api get auction by id
    // api get artwork by artwork_id
    
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
                    dimension={"10 x 10"} 
                />

            </div>
        </div>
    )
};

export default BidPage;
