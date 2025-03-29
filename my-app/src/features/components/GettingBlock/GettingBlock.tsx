'use client';

import useGetData from '../../../services/useGetData';
import setContent from '../../../utils/setContent';

import SpeakerCard from '../ui/SpeakerCard/SpeakerCard';

import './GettingBlock.scss';
import './GettingBlockMedia.scss';

const GettingBlock = () => {
    // делаем запрос для получения данных
    const {
        process,
        getData: { data, isError, isPending },
    } = useGetData('mentors');

    return (
        <section id="getting" className="getting">
            <div className="container">
                <h2 className="header__h2 roboto-bold">
                    Getting a mortgage funded takes a village.
                </h2>
                <h3 className="header__h3 roboto-regular">
                    Well, not quite a village, but two of the villages best
                    lending heroes!
                </h3>

                <div className="getting__speakers">
                    {setContent({
                        process,
                        isError,
                        isPending,
                        data: data,
                        Component: SpeakerCard,
                    })}
                </div>
            </div>
        </section>
    );
};

export default GettingBlock;
