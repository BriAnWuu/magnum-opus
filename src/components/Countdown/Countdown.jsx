import { useEffect, useState } from "react";
import { formatTime } from "../../utils/utils";
import "./Countdown.scss";

function Countdown({ open_at, close_at, className }) {
    const [countdownStart, setCountdownStart] = useState(true);
    const [timeRemaining, setTimeRemaining] = useState(0);

    useEffect(() => {
        if (countdownStart && open_at && close_at) {
            const countdownInterval = setInterval(() => {
                const currentTime = Date.now();
                let remainingTime = close_at - currentTime;

                if (remainingTime <= 0) {
                    remainingTime = 0;
                    clearInterval(countdownInterval);
                    setCountdownStart(false);
                }

                setTimeRemaining(remainingTime);

            }, 1000)

            return () => clearInterval(countdownInterval);
        } else {
            if (close_at - Date.now() > 0) {
                setCountdownStart(true)
            }
        }
    }, [countdownStart, close_at, timeRemaining]);


    const displayCountdown = (time) => {
        const [seconds, minutes, hours, days] = formatTime(time);

        return (
            <>
                <div className={ className }>
                    {days.toString().padStart(2, "0")} <span>days</span>
                </div>
                <div className={ className }>
                    {hours.toString().padStart(2, "0")} <span> hours</span>
                </div>
                <div className={ className }>
                    {minutes.toString().padStart(2, "0")} <span>minutes</span>
                </div>
                <div className={ className }>
                    {seconds.toString().padStart(2, "0")} <span>seconds</span>
                </div>
            </>
        )
    }

    
    return (
        <div className="countdown-display">
            { countdownStart ?
                displayCountdown(timeRemaining) :
                <div className={ className }>This lot has closed</div>
            }
        </div>
    )
};

export default Countdown;
