import React from 'react';

import './ResultsItem.css';

const ResultsItem = (props) => {
    const {
        artworkUrl60,
        artistName,
        trackName,
        collectionName,
        primaryGenreName,
        trackCount,
        collectionPrice,
        trackTimeMillis,
        trackPrice
    } = props.data;

    //time format
    let seconds = Math.floor(trackTimeMillis / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    seconds = seconds > 10 ? seconds : '0' + seconds;

    return (
        <div
            className={`results-item ${props.additionalClass}`}
            onClick={() => props.handleClickItem(props.arrIndex)}
            >
            <div className="general-info-wrapper">
                <div className="artist-wrapper">
                    <div className="cover">
                        <img src={artworkUrl60} alt={`${artistName} - ${collectionName}`} />
                    </div>
                    <div className="artist">{artistName}</div>
                </div>
                <div className="track">{trackName}</div>
                <div className="collection">{collectionName}</div>
                <div className="genre">{primaryGenreName}</div>
                <div className="expand">-</div>
            </div>
            <div className="extra-info-wrapper">
                <div className="track-count">{trackCount}</div>
                <div className="collection-price">{collectionPrice}</div>
                <div className="track-time">{minutes+':'+seconds}</div>
                <div className="track-price">{trackPrice}</div>
            </div>
        </div>
    );
}

export default ResultsItem;