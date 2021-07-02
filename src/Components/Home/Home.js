import React from "react";
import Highlight from "./Highlight";
import '../../Styles/Home.scss';


class Home extends React.Component {
    render() {
        return (
            <>
                <section>
                    <Highlight />
                </section>

                <section className="playlist">
                <iframe className='player' width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1280669827&color=%23ca8c79&auto_play=1&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"/>
                <div>
                    <a className='player-autor' href="https://soundcloud.com/witchofhel" title="dani.hexe" target="_blank">dani.hexe</a> · 
                    <a className='player-playlist' href="https://soundcloud.com/witchofhel/sets/asianfy" title="Asianfy" target="_blank">Asianfy</a>
                </div>
                </section>
            </>
        );
    
    }
}

export default Home