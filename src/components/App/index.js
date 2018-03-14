import React, { Component } from 'react';

import './App.css';
import SearchForm from '../SearchForm';
import ResultsItem from '../ResultsItem';
import * as messages from '../../utils/messages';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        searchResults: null,
        message: messages.tryToSearch,
        openedItem: null,
        preview: null,
    }
  }

  dataLoader = (query) => {
    const s = query.trim().replace( /\s+/, '+' );
    const queryURL = `https://itunes.apple.com/search?term=${s}`;
    const fetchParams = {
      method: 'GET',
    };
    fetch( queryURL, fetchParams )
    .then( response => response.json() )
    .then( searchResults => this.dataSaver(searchResults) )
    .catch( e => console.log('Fetching data error', e) );
  }

  dataSaver = (searchResults) => {
    if( 'object' === typeof searchResults && 
      searchResults.resultCount > 0 
    ) {
      this.setState({
        searchResults,
        message: '',
      });
    } else {
      this.setState({
        searchResults: null,
        message: messages.nothingFound,
      });
    }
  }

  handleClickItem = (idx) => {
    this.setState( (prevState) => {
      if( prevState.openedItem === idx ) {
        return {
          openedItem: null,
          preview: null
        }
      } else {
        return {
          openedItem: idx,
          preview: null
        }
      }
    });
  }

  preview = (url) => {
    this.setState({preview: url});
  }

  render() {
    const {searchResults, message, openedItem, preview} = this.state;
    const results = searchResults ? searchResults.results : null;
    console.log(results);
    return (
      <div className="App">
        <SearchForm
          submitHandler={this.dataLoader}
        />
        {!results ?
        <p>{message}</p>
        :
        (
          <div>
            <div className="results-wrapper top-headers results-item">
              <div className="general-info-wrapper">
                  <div className="col">
                    <div className="artist-wrapper">Artist</div>
                    <div className="track">Track</div>
                  </div>
                  <div className="col">
                    <div className="collection">Collection</div>
                    <div className="genre">Genre</div>
                  </div>
              </div>
            </div>
            <div className="results-wrapper">
              {results.map((data, idx) => (
                <ResultsItem 
                  key={idx}
                  arrIndex={idx}
                  data={data}
                  additionalClass={openedItem === idx ? 'opened' : ''}
                  handleClickItem={this.handleClickItem}
                  preview={this.preview}
                  player={openedItem === idx && preview ? preview : null}
                />
              ))}
            </div>
          </div>
        )
        }
      </div>
    );
  }
}

export default App;
