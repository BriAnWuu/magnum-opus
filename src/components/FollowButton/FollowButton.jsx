import { motion } from "framer-motion";
import "./FollowButton.scss";

function FollowButton(prop) {
    const followHandler = () => {
        
    }

    return (
        <div 
            className="lot__follow-button"
            onClick={() => followHandler()}
        >
            Create Alert
        </div>
    )
};

export default FollowButton;
