import icon from '../../assets/icons/error/error.png';

const ErrorPage = () => {
    return (
        <div style={{display: 'block', margin: '200px auto', textAlign: 'center', width: '300px'}}>
            <img src={icon} alt="error" style={{display: 'block', margin: '0 auto', objectFit: 'contain', width: '100%'}}/>
            <p className='roboto-regular' style={{marginTop: '20px', fontSize: '16px'}}>You have reached a non-existent page. Please return to the main page.</p>
            <a className='roboto-bold' href="#" style={{display: 'block', marginTop: '20px', color: '#126893', textAlign: 'center', fontSize: '16px'}}>Return to the main page.</a>
        </div>
    )
}

export default ErrorPage;