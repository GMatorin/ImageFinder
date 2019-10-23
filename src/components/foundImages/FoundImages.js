import React, { Component, useContext } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import withWidth from '@material-ui/core/withWidth';
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
    const { width } = this.props;
    if (images) {
      imageListContent = (
        <GridList cols={width === 'xs' ? 1 : 3}>
          {images.map(img => (
            <GridTile
              title={img.tags}
              key={img.id}
              subtitle={
                <span>
                  by <strong>{img.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                  <ZoomIn color='white' />
                </IconButton>
              }
            >
              <img src={img.largeImageURL} alt='' />
            </GridTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null;
    }

    const actions = [
      <FlatButton label='Close' primary={true} onClick={this.handleClose} />
    ];

    return (
      <div>
        {imageListContent}
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <img src={this.state.currentImg} alt='' style={{ width: '100%' }} />
        </Dialog>
      </div>
    );
  }
}

//export default FoundImages;
export default withWidth()(FoundImages);
/*
const styles = {
  gridList: {
    width: 1000,
    height: 'auto',
    overflowY: 'auto'
  },
  indvCell: {
    borderRadius: 25
  }
 
};
*/
