import type { IButtonsArrowsProps } from '@/shared/shared-components/componentsTypes';
import './Buttons.scss';
import './ButtonMedia.scss';

export const ButtonArrow = ({
    type,
    data,
    offset,
    setOffset,
    maxOffset,
    width,
    setPressButton,
    setIndexSlide,
    indexSlide,
}: IButtonsArrowsProps) => {
    // функция установки offset и indexSlide при клике на кнопки
    const initialOffset = (target: HTMLElement) => {
        if (target.getAttribute('data-arrow') === 'next') {
            if (offset === maxOffset) {
                setOffset(0);
            } else {
                setOffset((offset) => offset + width);
            }

            setPressButton(true); // отслеживание нажатия на кнопку

            if (indexSlide === maxOffset / width + 1) {
                setIndexSlide(1);
            } else {
                setIndexSlide((indexSlide) => indexSlide + 1);
            }
        }

        if (target.getAttribute('data-arrow') === 'prev') {
            if (offset === 0) {
                setOffset(maxOffset);
            } else {
                setOffset((offset) => offset - width);
            }

            setPressButton(true); // отслеживание нажатия на кнопку

            if (indexSlide === 1) {
                setIndexSlide(maxOffset / width + 1);
            } else {
                setIndexSlide((indexSlide) => indexSlide - 1);
            }
        }
    };

    return (
        <button
            className={`btn btn__arrow-${type}`}
            data-arrow={data}
            onClick={(e) => {
                initialOffset(e.target as HTMLElement);
            }}
        >
            <div data-arrow={data}></div>
        </button>
    );
};
