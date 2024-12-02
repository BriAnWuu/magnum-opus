import { useParams } from "react-router-dom";
import testImg1 from "../../assets/896.jpg";
import AboutTheWork from "../../components/AboutTheWork/AboutTheWork";
import ArtworkImage from "../../components/ArtworkImage/ArtworkImage";
import "./BidPage.scss";

function BidPage() {
    const { auctionId } = useParams();
    
    // api get auction by id
    // api get artwork by artwork_id
    
    return (
        <div className="lot">
            <div className="lot__left-column">
                <ArtworkImage image={testImg1} />
                <AboutTheWork description={"Description"} provenance={"Provenance"} />
            </div>
            <div className="lot__right-column">
                
            </div>
        </div>
    )
};

export default BidPage;
