import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeCircles
      wrapperClass="centered"
      height="100"
      width="100"
      color="#4fa7b3"
      visible={true}
      ariaLabel="three-circles-rotating"
    />
  );
};

export default Loader;
