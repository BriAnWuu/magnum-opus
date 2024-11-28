import testImg6 from "../../assets/28136.jpg";
import testImg7 from "../../assets/28354.jpg";
import testImg8 from "../../assets/28790.jpg";
import testImg2 from "../../assets/3302.jpg";
import testImg9 from "../../assets/36171.jpg";
import testImg10 from "../../assets/39479.jpg";
import testImg11 from "../../assets/40724.jpg";
import testImg12 from "../../assets/40811.jpg";
import testImg3 from "../../assets/4092.jpg";
import testImg4 from "../../assets/4594.jpg";
import testImg5 from "../../assets/5391.jpg";
import testImg1 from "../../assets/896.jpg";

import "./Main.scss";

function Main(prop) {
    const testImages = [ testImg1, testImg2, testImg3, testImg4, testImg5, testImg6, testImg7, testImg8, testImg9, testImg10, testImg11, testImg12 ];
    console.log(testImages.length)
    return (
        <>
            <div className="gallery">

                <div className="gallery__frame">
                    <div className="gallery__border-image"></div>
                </div>

                <div className="gallery__image-container">
                    { testImages.map(image => (
                         <img className="test-image" src={image} />
                    )) }
                </div>
            
            </div>
        </>
    )
};

export default Main;
