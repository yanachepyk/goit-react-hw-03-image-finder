import PropTypes from 'prop-types';
import { Button } from './Button.styled';

const LoadMore = ({ handleClick }) => {
  return (
    <Button type="bytton" onClick={handleClick}>
      Load more
    </Button>
  );
};

LoadMore.propTypes = {
  handleClick: PropTypes.func,
};

export default LoadMore;
