import React from 'react';
import { Component } from 'react';
import { FormGroup, FormControl, InputGroup, InputGroupAddon, Glyphicon } from 'react';

class Global extends Component {
  render() {
    return (
      <div>
        <h2>Google Book Store  Center</h2>
        <FormGroup>
          <InputGroup>
            <FormControl type="text" placeholder="Search for a book"></FormControl>
            <InputGroupAddon>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
      </div>
    )
  }
}
export default Global;
