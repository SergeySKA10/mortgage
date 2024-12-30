import spinner from '../../../assets/icons/spinner/spinner.svg';

const Spinner = () => {
    return (
        <div style={{display: 'block', margin: '0 auto', textAlign: 'center', width: '100px'}}>
            <img src={spinner} alt="loading" style={{width: '100%'}}/>
            <p className='roboto-regular' style={{fontSize: '16px', width: '115px'}}>Loading...</p>
        </div>
    )
}

export default Spinner;