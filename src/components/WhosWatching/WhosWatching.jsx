import { motion } from "framer-motion";
import "./WhosWatching.scss";

const profiles = [
    { id: 1, name: "Alice", avatar: "https://robohash.org/alice.png" },
    { id: 2, name: "Bob", avatar: "https://robohash.org/bob.png" },
    { id: 3, name: "Charlie", avatar: "https://robohash.org/charlie.png" },
    { id: 4, name: "Diana", avatar: "https://robohash.org/diana.png" },
    { id: 5, name: "Eve", avatar: "https://robohash.org/eve.png" },
    { id: 6, name: "Frank", avatar: "https://robohash.org/frank.png" },
    { id: 7, name: "Grace", avatar: "https://robohash.org/grace.png" },
    { id: 8, name: "Hank", avatar: "https://robohash.org/hank.png" },
    { id: 9, name: "Ivy", avatar: "https://robohash.org/ivy.png" },
    { id: 10, name: "Jack", avatar: "https://robohash.org/jack.png" },
    { id: 11, name: "Karen", avatar: "https://robohash.org/karen.png" },
    { id: 12, name: "Leo", avatar: "https://robohash.org/leo.png" },
    { id: 13, name: "Mona", avatar: "https://robohash.org/mona.png" },
    { id: 14, name: "Nina", avatar: "https://robohash.org/nina.png" },
    { id: 15, name: "Oscar", avatar: "https://robohash.org/oscar.png" },
    { id: 16, name: "Paul", avatar: "https://robohash.org/paul.png" },
    { id: 17, name: "Quincy", avatar: "https://robohash.org/quincy.png" },
    { id: 18, name: "Rachel", avatar: "https://robohash.org/rachel.png" },
    { id: 19, name: "Steve", avatar: "https://robohash.org/steve.png" },
    { id: 20, name: "Tina", avatar: "https://robohash.org/tina.png" },
];
  

function WhosWatching({ setIsProfileSelected }) {

    const handleProfileSelection = (user) => {
        setIsProfileSelected(true);
        sessionStorage.setItem("user_id", JSON.stringify(user.id));
    }

    return (
        <div className="who">
            <h1 className="who__title">We're not Netflix, but still... <span>Who's Watching?</span></h1>
            <div className="who__profiles-container">
                { profiles.map((user) => 
                    <article 
                        key={user.id} 
                        className="who__card"
                    >
                        <motion.img 
                            className="who__avatar"
                            src={user.avatar} 
                            alt={`avatar of ${user.name}`}
                            onClick={() => handleProfileSelection(user)}
                            initial={{ scale: 1 }}
                            whileHover={{ 
                                scale: 1.1,
                                transition: {
                                    ease: "easeInOut"
                                }
                            }}
                        />
                        <p className="who__name">{`${user.name} ( user ${user.id} )`}</p>
                    </article>
                )}
            </div>
        </div>
    )
};

export default WhosWatching;
