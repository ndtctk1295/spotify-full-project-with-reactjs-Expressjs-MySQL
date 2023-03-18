import React from "react"

import MenuSide from "../../Components/MenuSide"
import MainSide from "../../Components/MainSide"
import MusicPlayer from "../../Components/MusicPlayer"
import "./style.css"

const Home = () => {
    return(
        <div className="home">
            <div className="menu_side">
                <MenuSide/>
            </div>
            <div className="main_side">
                <MainSide/>   
            </div>
            <MusicPlayer/>
        </div>
    )    
}
export default Home;