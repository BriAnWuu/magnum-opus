import { motion } from "framer-motion";
import { formatPrice } from "../../utils/utils";
import "./InboxMessage.scss";

function InboxMessage({ message }) {
    return (
        <motion.li 
            className="broadcast__inbox-message"
            initial={{ 
                opacity: 0, 
                y: 20,
                boxShadow: "0px 0px #fff"
            }}
            whileInView={{ 
                opacity: 1, 
                y: 0,
                boxShadow: "3px 3px #fff"
            }}
            transition={{
                ease: "easeInOut",
                type: "spring",
            }}
            viewport={{ once: true }}
        >
            <h5>{`Lot ${message.id}`}</h5>
            <p>
                { `${formatPrice(message.amount)} is the latest bid on ${ 
                    message.title ? message.title : `Lot ${message.id}`
                }`}
            </p>
        </motion.li>
    )
};

export default InboxMessage;
