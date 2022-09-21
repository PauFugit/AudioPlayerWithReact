import React from 'react';



const Play = (props) => {

    return (
        <div className="container">
            <button className="btn-click" onClick={props.previous}><i className="fas fa-arrow-circle-left fa-2x"></i></button>
            <button className="btn-click" onClick={props.goPlay}><i className="far fa-play-circle fa-2x"></i></button>
            <button className="btn-click" onClick={props.pause}><i className="far fa-pause-circle fa-2x"></i></button>
            <button className="btn-click" onClick={props.next}><i className="fas fa-arrow-circle-right fa-2x"></i></button>
            <div className= "reproductor mt-3">
            <audio ref={props.refSong} controls ></audio>
            </div>
        </div>
    )
}


export default Play; 