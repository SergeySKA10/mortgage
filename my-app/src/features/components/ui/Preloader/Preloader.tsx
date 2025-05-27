import Spiner from '../Spinner/Spinner';
import './Preloader.scss';

export const Preloader = () => {
    return (
        <div className="preloader">
            <Spiner width="100px" height="100px" margin="0 auto" />
        </div>
    );
};
