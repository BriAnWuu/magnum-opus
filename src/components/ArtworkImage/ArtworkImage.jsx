import "./ArtworkImage.scss";

function ArtworkImage({ imageId, alt_text }) {
    return (
        <>
            <img 
                src={ `${import.meta.env.VITE_APP_IMG_BASE_URL}/${imageId}.jpg` } 
                alt= { alt_text }
            />
        </>
    )
};

export default ArtworkImage;
