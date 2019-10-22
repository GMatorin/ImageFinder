import React, { Component, useContext } from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import { ImagesContext } from '../../context';
class FoundImages extends Component {
  state = {
    open: false,
    currentImg: ''
  };
  static contextType = ImagesContext;

  handleOpen = img => {
    this.setState({ open: true, currentImg: img });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    let imageListContent;
    const images = this.context[0];
    /*
    console.log(this.context);
    console.log(images);
    */
    if (images) {
      imageListContent = (
        <GridList cols={3}>
          {images.map(img => (
            <GridTile title={img.tags} key={img.id}>
              <img src={img.largeImageURL} alt='' />
            </GridTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null;
    }

    return <div>{imageListContent}</div>;
  }
}
/*
FoundImages.propTypes = {
  images: PropTypes.array.isRequired
};
*/
export default FoundImages;

/*
{() => {
          const { images } = this.context;
          if (images) {
            return (
              <GridList cols={3}>
                {images.map(img => (
                  <GridTile key={img.id}>
                    <img src={img.largeImageURL} alt='' />
                  </GridTile>
                ))}
              </GridList>
            );
          } else {
            return null;
          }
        }}
*/
