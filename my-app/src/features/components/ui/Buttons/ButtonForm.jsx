import './Buttons.scss';
import './ButtonMedia.scss';

export const ButtonForm = ({text}) => {
    return (
        <button type='submit' className={`btn btn__form roboto-bold`}>
            {text}
            <div></div>
        </button>
    )
}