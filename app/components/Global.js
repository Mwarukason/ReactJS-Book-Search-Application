import React from 'react';
import { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class Global extends Component{
  constructor(props){
    super(props);
    this.state = {
      query: ''
    }
  }
  search(){
    const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
    fetch(`${BASE_URL}${this.state.query}`, {method: 'GET'} )
    .then(response => response.json())
    .then(json => console.log(json));
    //console.log('sarch', this.state.query);
  }
  render() {
    return (
      <div className="Global">
        <h2>Google Book Store  Center</h2>
        <FormGroup>
          <InputGroup>
            <FormControl
            type="text"
            placeholder="Search for a book"
            //take string of user typed in
            onChange={event => this.setState({query: event.target.value})}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                this.search();
              }
            }}
          />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
      </div>
    );
  };
};

export default Global;
