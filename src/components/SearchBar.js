import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  state={term: ''};

  onInputChange = (event) => {
    this.setState({
      term: event.target.value
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }

  render(){
    return (
      <div style={{marginTop: "20px"}} className="nav search-bar ui">
        
        <form onSubmit={this.onFormSubmit} className="ui form">
        Youtube
          <div className="field">
            <input
              style={{width: '800px', marginBottom: '15px'}}
              placeholder="Search" 
              type="text" 
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <button className="ui medium button" style={{backgroundColor: '#e5e7ea'}}>
              <i className="ui icon search" />
            </button>
          </div>
        </form>
        <p style={{borderBottom: '4px solid lightgrey', opacity: '0.1', marginBottom: '30px'}} ></p>
      </div>
    );
  }
}

export default SearchBar;