import errorIcon from '../../../assets/icons/error/error.png';

const ErrorMessage = () => {
    return (
        <div style={{display: 'block', margin: '30px auto', textAlign: 'center', width: '300px'}}>
            <img src={errorIcon} alt="error" style={{display: 'block', margin: '0 auto', objectFit: 'contain', width: '100%'}}/>
            <p className='roboto-regular' style={{marginTop: '20px', fontSize: '16px'}}>There was an error loading the data. Please try again later.</p>
        </div>
    )
}

export default ErrorMessage;