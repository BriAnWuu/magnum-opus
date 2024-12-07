import { motion } from "framer-motion";
import { UserAPI } from "../../apis/userAPI";
import "./FollowButton.scss";

function FollowButton({ auctionId }) {
    const followHandler = async () => {
        sessionStorage.setItem("user_id", 3);
        const user_id = sessionStorage.getItem("user_id");

        await UserAPI.update(user_id, {
            watching: auctionId,
        }).then((statusCode) => {
            console.log(statusCode);
        }).catch((error) => {
            console.error(error)
        });
    }

    return (
        <motion.div 
            className="lot__follow-button"
            onClick={() => followHandler()}
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9 }}
        >
            Create Alert
        </motion.div>
    )
};

export default FollowButton;
