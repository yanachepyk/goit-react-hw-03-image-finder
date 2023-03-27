import LoadMore from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import { Component } from 'react';
import { ContainerGallery } from './ImageGallery.styled';
import ImageGalleryItem from './ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    loading: false,
    showModal: false,
    sourceImage: '',
  };

  handleModalToggle = (showModal, sourceImage) => {
    this.setState({
      showModal: showModal,
      sourceImage: sourceImage,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ images: [], page: 1 }, () => this.getImages());
    } else if (prevState.page !== this.state.page && this.state.page > 1) {
      this.getImages();
    }
  }

  getImages() {
    this.setState({ loading: true });
    fetch(
      `https://pixabay.com/api/?q=${this.props.query}&page=${this.state.page}&key=34035283-4d31da2bf260205eb23ca149e&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(res => res.json())
      .then(res =>
        this.setState(oldState => {
          return {
            ...oldState,
            images: [...oldState.images, ...res.hits],
          };
        })
      )
      .finally(() => this.setState({ loading: false }));
  }

  loadMore = () => {
    this.setState(oldState => {
      return {
        ...oldState,
        page: oldState.page + 1,
      };
    });
  };

  render() {
    return (
      <>
        <ContainerGallery>
          {this.state.images.map(img => (
            <ImageGalleryItem
              key={img.id}
              previewImg={img.webformatURL}
              sourceImg={img.largeImageURL}
              alt={img.tags}
              handleItemClick={this.handleModalToggle}
            />
          ))}
        </ContainerGallery>
        {this.state.loading && <Loader />}
        {this.state.images.length > 0 && (
          <LoadMore handleClick={this.loadMore} />
        )}
        {this.state.showModal && (
          <Modal
            onModalClose={this.handleModalToggle}
            sourceImg={this.state.sourceImage}
          />
        )}
      </>
    );
  }
}
