import useGetData from '../../../services/useGetData';
import setContent from '../../../utils/setContent';

import { useState, useEffect } from 'react';

import SpeakerCard from '../ui/SpeakerCard/SpeakerCard';

import './GettingBlock.scss';
import './GettingBlockMedia.scss';

const GettingBlock = () => {
    // делаем запрос для получения данных
    const {process, getData: {data, isError, isPending}} = useGetData('mentors', 1);

    // создаем изначальное состояние для карточек менторов
    const [mentors, setMentors] = useState([]);

    // добавляем в карточки полученные данные
    useEffect(() => {
        if(data) {
            setMentors(mentors => data.map(el => {
                return (
                    <SpeakerCard
                        key={el.id}
                        data={el}
                    />
                )
            }));
        }
    }, [data])

    return (
        <section id='getting' className="getting">
            <div className="container">

                <h2 className="header__h2 roboto-bold">Getting a mortgage funded takes a village.</h2>
                <h3 className="header__h3 roboto-regular">Well, not quite a village, but two of the villages best lending heroes!</h3>

                <div className="getting__speakers">
                    {setContent({process, isError, isPending, Components: mentors})}
                </div>
            </div>
        </section>
    )
}

export default GettingBlock;