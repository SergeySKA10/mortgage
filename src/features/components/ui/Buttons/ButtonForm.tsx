import type { IButtonFormProps } from '@/shared/shared-components/componentsTypes';
import './Buttons.scss';
import './ButtonMedia.scss';

export const ButtonForm = ({ text }: IButtonFormProps) => {
    return (
        <button
            tabIndex={0}
            type="submit"
            className={`btn btn__form roboto-bold`}
        >
            {text}
            <div></div>
        </button>
    );
};
