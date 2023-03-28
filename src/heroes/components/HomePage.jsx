import { Link } from 'react-router-dom';
import banner from './assets/banner.jpg'

const HomePage = () => {
    return (
        <div className='col d-flex flex-column justify-content-center align-items-center'>
            <div className="my-5 w-100 bg-dark-subtle d-flex flex-column justify-content-around align-items-center rounded"> 
                <h1 className='mt-2 text-dark'>JAC Comics Store</h1>
                <h4 className='mt-2 text-center text-secondary-emphasis'>Somos la editorial oficial para Marvel Comics, DC Comics y las mejores revistas de Latinoamérica.</h4>
                <img src={banner} alt="banner"  className='my-3'/>
                <Link to={'/marvel'} className='btn btn-danger text-uppercase p-2 px-4 mb-3'>ver comics</Link>
            </div>
        </div>
    );
};

export default HomePage;
