import { formatPrice } from "../../utils/utils";
import "./InboxMessage.scss";

function InboxMessage({ message }) {
    return (
        <li className="broadcast__inbox-message">
            <h5>{`Lot ${message.id}`}</h5>
            <p>
                { `${formatPrice(message.amount)} is the latest bid on ${ 
                    message.title ? message.title : `Lot ${message.id}`
                }`}
            </p>
        </li>
    )
};

export default InboxMessage;
