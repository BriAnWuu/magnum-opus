import "./Main.scss";

function Main(prop) {
    const testImages = require.context('../../assets', false, /.js$/)
    console.log(testImages.length)
    return (
        <>
           { testImages.map(image => (
                <img src={image} />
           )) } 
        </>
    )
};

export default Main;
