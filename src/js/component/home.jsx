import React, { useRef, useState, useEffect } from "react";
import Play from "./Play.js";
import List from "./List.js";


const initialState = [
  {
    id: 1,
    src: "https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3",
    name: "I. Mario's castle theme",
  },
  {
    id: 2,
    src: "https://assets.breatheco.de/apis/sound/files/mario/songs/hurry-starman.mp3",
    name: "II. Mario's Hurry-Starman theme",
  },
  {
    id: 3,
    src: "https://assets.breatheco.de/apis/sound/files/mario/songs/overworld.mp3",
    name: "III. Mario's Overworld theme",
  },
];

const Home = () => {
  let RefID = useRef(null);
  const [songs] = useState(initialState);
  let refSong = useRef(null);
  const setSongSelected = ({ id }) => {
    RefID.current = id;
    for (var song of songs) {
      if (song.id === RefID.current) {
        refSong.current.src = song.src;
      }
    }
    goPlay();
  };

  const previous = () => {
    if (RefID.current === null) {
		setSongSelected({ id: initialState.length });
    } else if (RefID.current === 1) {
		setSongSelected({ id: initialState.length });
    } else {
		RefID.current = RefID.current - 1;
		setSongSelected({ id: RefID.current });
    }
  };
  const goPlay= () => {
    refSong.current.play();
  };
  const pause = () => {
    refSong.current.pause();
  };
  const next = () => {
    if (RefID.current === null) {
		setSongSelected({ id: 2 });
    } else if (RefID.current === initialState.length) {
		setSongSelected({ id: 1 });
    } else {
		RefID.current = RefID.current + 1;
		setSongSelected({ id: RefID.current });
    }
  };

  useEffect(() => {
    getSongs();
  }, [])
  
  const getSongs = () => {
    fetch("https://assets.breatheco.de/apis/sound/songs", {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
    })
    .then ((response) => {
      return response.json(); 
    })
    .then((data) => { 
      console.log(data)})
  
    .catch((error) => {
      console.log(error)
    })
  }
  
  return (
    <>
		<h2 className="title mt-3"><img className="yoshi" src="https://cdn.icon-icons.com/icons2/2995/PNG/512/video_game_mario_enemy_icon_187427.png"></img>Audio Player 
		 </h2>
      <List songs={songs} setSongSelected={setSongSelected} />
      <Play
        refSong={refSong}
        setSongSelected={setSongSelected}
        previous={previous}
        goPlay={goPlay}
        pause={pause}
        next={next}
      />
    </>
  );
};

export default Home;
