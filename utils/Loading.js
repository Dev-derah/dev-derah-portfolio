import { Grid } from 'react-loader-spinner';

const Loading = () => (
  <div className="loader h-screen flex justify-center items-center bg-primary-black">
    <Grid
      height="80"
      width="80"
      color="#34acc7"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{}}
      wrapperClass=""
      visible
    />
  </div>
);

export default Loading;
