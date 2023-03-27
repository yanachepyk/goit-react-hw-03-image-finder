import PropTypes from 'prop-types';
import {
  ButtonLabel,
  SearchBar,
  SearchButton,
  SearchForm,
  SearchFormInput,
} from './Searchdar.styled';
import { BsSearchHeart } from 'react-icons/bs';

const Searchbar = ({ onSubmit }) => {
  return (
    <SearchBar>
      <SearchForm onSubmit={onSubmit}>
        <SearchButton type="submit">
          <ButtonLabel>
            <BsSearchHeart />
          </ButtonLabel>
        </SearchButton>

        <SearchFormInput
          name="search"
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBar>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
