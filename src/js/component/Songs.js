import React from 'react';

const Songs = ({ id, alt = 'Song', setSongSelected, name}) => {
    return (
        <>
            <ul className="songs-group" onClick={() => {setSongSelected({id: id})}}>
                <li className="songs-group-item" alt={alt}>{name}</li>
            </ul>
        </>
    )
}

export default Songs;