import {Link} from 'react-router-dom'


const ErrorPage = () => {
  return (
    <div className='max-h-full'>
        <div className='flex flex-col  justify-center items-center'>
            <h2>ErrorPage</h2>
            <h1>404</h1>
            <Link to="/"><button>Go to Home Page</button></Link>
        </div>
    </div>
  )
}

export default ErrorPage