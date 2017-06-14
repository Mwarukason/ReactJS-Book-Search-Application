import React, { Component } from 'react';

class Gallery extends Component {
    render(){
      let alten = 'https://drive.google.com/uc?export=download&id=0B2vGy74QfhlMQXlnQmFtNUxlTHM';
      return(
        <div>
          <div className="head">BOOK GALLERY</div>
          {
            this.props.items.map((item, index) => {
            let {title, imageLinks, infoLink} = item.volumeInfo;
            return(
              <a
                key={index}
                className="book"
                href={infoLink}
                target="_blank"
              >
                <img
                  src={imageLinks != undefined ? imageLinks.thumbnail : alten}
                  alt="book image"
                  className="book-image"
                />
                <div className="book-text">
                  {title}
                </div>
              </a>
            )
          })
         }
        </div>
      )
    }
}

export default Gallery;
