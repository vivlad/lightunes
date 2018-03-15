import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
        }
    }
    
    searchInputHandler = (e) => {
        this.setState({
            input: e.target.value,
        });
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.submitHandler(this.state.input);
    }

    render() {
        const { input } = this.state;
        return(
            <form onSubmit={(e) => this.submitHandler(e)} className="search-form">
                <input onChange={this.searchInputHandler} value={input} />
                <button type="submit">Search</button>
            </form>
        );
    }
}

SearchForm.propTypes = {
  submitHandler: PropTypes.func,
}

export default SearchForm;