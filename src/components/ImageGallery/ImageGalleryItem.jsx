import PropTypes from 'prop-types';
import { GalleryItem } from './ImageGallery.styled';

const ImageGalleryItem = ({ previewImg, sourceImg, handleItemClick, alt }) => {
  return (
    <GalleryItem onClick={() => handleItemClick(true, sourceImg)}>
      <img src={previewImg} alt={alt} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  previewImg: PropTypes.string,
  sourceImg: PropTypes.string,
  handleItemClick: PropTypes.func,
  alt: PropTypes.string,
};

export default ImageGalleryItem;
