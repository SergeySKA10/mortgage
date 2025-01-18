import { useQuery } from '@tanstack/react-query';
import {useHttp} from '../../../hooks/http.hook';

import Spinner from '../ui/Spinner/Spinner';
import ErrorMessage from '../ui/ErrorMessage/ErrorMessage';
import SpeakerCard from '../ui/SpeakerCard/SpeakerCard';

import './GettingBlock.scss';
import './GettingBlockMedia.scss';

const GettingBlock = () => {
    const request = useHttp();
    // получаем спикеров для формирования карточек
    const {data, isError, isPending} = useQuery({
        queryKey: ['mentors'],
        queryFn: () => request({url: 'http://localhost:3001/mentors'})
    });

    // формируем карточки для отображения в Main Page
    const speakersCard = isError ? <ErrorMessage/>
                        : isPending ? <Spinner/>
                        : data.map(el => {
                            return (
                                <SpeakerCard
                                    key={el.id}
                                    data={el}
                                />
                            )
                        });

    return (
        <section id='getting' className="getting">
            <div className="container">

                <h2 className="header__h2 roboto-bold">Getting a mortgage funded takes a village.</h2>
                <h3 className="header__h3 roboto-regular">Well, not quite a village, but two of the villages best lending heroes!</h3>

                <div className="getting__speakers">
                    {speakersCard}
                </div>
            </div>
        </section>
    )
}

export default GettingBlock;