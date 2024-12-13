import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Main from "../../components/Main/Main";
import WhosWatching from "../../components/WhosWatching/WhosWatching";
import "./Home.scss";

function Home() {
    const [isProfileSelected, setIsProfileSelected] = useState(true)
    
    useEffect(() => {
        const user_id = sessionStorage.getItem("user_id");
        if (user_id) {
            setIsProfileSelected(true);
            document.body.style.overflow = "auto";
        } else {
            setIsProfileSelected(false);
            document.body.style.overflow = "hidden";
        }
        return () => {
            setIsProfileSelected(true);
            document.body.style.overflow = "auto";
        }
    }, [isProfileSelected])


    return (
        <div className="home">
            { !isProfileSelected && 
                <WhosWatching setIsProfileSelected={setIsProfileSelected} />
            }
            <div className="home__content">
                <Hero />
                <Main />
            </div>
        </div>
    )
};

export default Home;
