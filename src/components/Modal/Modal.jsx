import { Component } from 'react';
import { ContainerModal, Overlay } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEsclick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEsclick);
  }

  handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onModalClose(null);
    }
  };

  handleEsclick = e => {
    if (e.code === 'Escape') {
      this.props.onModalClose(null);
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleOverlayClick}>
        <ContainerModal className="modal">
          <img src={this.props.sourceImg} alt="" />
        </ContainerModal>
      </Overlay>
    );
  }
}

export default Modal;
