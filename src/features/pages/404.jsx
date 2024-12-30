import { Link } from 'react-router-dom';

import icon from '../../assets/icons/error/error.png';

const ErrorPage = () => {
    return (
        <div style={{display: 'block', paddingTop:'200px', margin: '0px auto', textAlign: 'center', width: '300px'}}>
            <img src={icon} alt="error" style={{display: 'block', margin: '0 auto', objectFit: 'contain', width: '100%'}}/>
            <p className='roboto-regular' style={{marginTop: '20px', fontSize: '16px'}}>You have reached a non-existent page. Please return to the main page.</p>
            <Link className='roboto-bold' to="/" style={{display: 'block', marginTop: '20px', color: '#126893', textAlign: 'center', fontSize: '16px'}}>Return to the main page.</Link>
        </div>
    )
}

export default ErrorPage;