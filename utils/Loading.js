import { Bars } from 'react-loader-spinner';

const Loading = () => (
  <div className="loader h-screen flex justify-center items-center bg-primary-black">
    <Bars
      height="80"
      width="80"
      color="#34acc7"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible
    />
  </div>
);

export default Loading;
