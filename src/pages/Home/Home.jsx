import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Main from "../../components/Main/Main";
import WhosWatching from "../../components/WhosWatching/WhosWatching";
import "./Home.scss";

function Home() {
    const [isProfileSelected, setIsProfileSelected] = useState(false)
    
    useEffect(() => {
        const user_id = sessionStorage.getItem("user_id");
        if (user_id) {
            setIsProfileSelected(true);
        }
    }, [])


    return (
        <div className="home">
            { !isProfileSelected && 
                <WhosWatching setIsProfileSelected={setIsProfileSelected} />
            }
            <Hero />
            <Main />
        </div>
    )
};

export default Home;
