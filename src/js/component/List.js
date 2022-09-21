import React from "react";
import Songs from "./Songs.js";

const List = (props) => {
  return (
    <div className="container">
      <div className="songs-group">
        {props.songs.length > 0 &&
          props.songs.map((song) => (
            <div className="col" key={song.id}>
              <Songs
                src={song.src}
                id={song.id}
                alt={`Image ${song.id}`}
                setSongSelected={props.setSongSelected}
                name={song.name}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default List;