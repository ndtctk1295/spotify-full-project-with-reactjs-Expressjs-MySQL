import React from "react"

import MenuSide from "../../Components/MenuSide"
import Info from "../../Components/Info"
import MusicPlayer from "../../Components/MusicPlayer"


const PrivateArtist = () => {
    return(
        <div className="home">
            <div className="menu_side">
                <MenuSide/>
            </div>
            <div className="main_side">
                <Info/>   
            </div>
            <MusicPlayer/>
        </div>
    )    
}
export default PrivateArtist;