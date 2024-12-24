import "./Inbox.scss";

function Inbox({ children }) {
    return (
        <ul className="broadcast__inbox">
            { children }
        </ul>
    )
};

export default Inbox;
