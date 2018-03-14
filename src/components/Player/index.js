import React from 'react';

const Player = (props) => (
    <audio controls autoPlay>
        <source src={props.url} type="audio/mp4" />
        <p>Your browser does not support HTML5 audio.</p>
    </audio>
)

export default Player;