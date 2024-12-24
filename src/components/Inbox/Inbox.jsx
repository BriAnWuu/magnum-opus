import "./Inbox.scss";

function Inbox({ children }) {
    return (
        <section className="broadcast__inbox-container">
            {/* <h4 className="broadcast__inbox-title">Don't Miss Out</h4> */}
            <ul className="broadcast__inbox">
                { children }
            </ul>
        </section>
    )
};

export default Inbox;
