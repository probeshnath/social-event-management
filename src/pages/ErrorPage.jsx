import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='flex h-screen  justify-center items-center'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold pb-3'>ErrorPage</h2>
        <h1 className='text-5xl font-bold pb-3'>404</h1>
        <Link to='/'>
          <button className='bg-orange-400 text-white rounded-md py-2 px-5'>Go to Home Page</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
