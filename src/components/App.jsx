import { Component } from 'react';
import { ContainerApp } from './App.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    query: '',
  };

  handleSearch = event => {
    event.preventDefault();
    this.setState({ query: event.target.elements.search.value });
  };

  render() {
    return (
      <ContainerApp>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery query={this.state.query} />
      </ContainerApp>
    );
  }
}
