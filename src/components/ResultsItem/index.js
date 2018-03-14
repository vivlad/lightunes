import React from 'react';

import './ResultsItem.css';

const ResultsItem = (props) => {
    const {
        artworkUrl100,
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
        <div className={`results-item ${props.additionalClass}`}>
            <div className="general-info-wrapper">
                <div classname="col">
                  <div className="artist-wrapper">
                      <div className="cover">
                          <img src={artworkUrl100} alt={`${artistName} - ${collectionName}`} />
                      </div>
                      <div className="artist">{artistName}</div>
                  </div>
                  <div className="track">{trackName}</div>
                </div>
                <div className="col">
                  <div className="collection">{collectionName}</div>
                  <div className="genre">{primaryGenreName}</div>
                  <div
                    className="toggler"
                    onClick={() => props.handleClickItem(props.arrIndex)}
                  ></div>
                </div>
            </div>
            <div className="extra-info-wrapper">
                <div className="collection-wrapper col">
                  <div className="collection-name">
                    <span>Collection: </span>
                    {collectionName}
                  </div>
                  <div className="track-count">
                    <span>Track Count: </span>
                    {trackCount}
                  </div>
                  <div className="collection-price">
                    <span>Price: </span>
                    {collectionPrice} USD
                  </div>
                </div>
                <div className="track-wrapper col">
                  <div className="track-time">
                    <span>Track duration: </span>
                    {minutes+':'+seconds}
                  </div>
                  <div className="track-price">
                    <span>Track Price: </span>
                    {trackPrice} USD
                  </div>
                </div>
            </div>
        </div>
    );
}

export default ResultsItem;