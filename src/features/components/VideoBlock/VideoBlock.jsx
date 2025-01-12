import { useQuery } from '@tanstack/react-query';
import { useHttp } from '../../../hooks/http.hook';

import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { ButtonPlay } from '../Buttons/Buttons';

import './VideoBlock.scss';

const VideoBlock = () => {
    const request = useHttp();
    // получаем видео из store для формирования блока с видео
    const {data, isError, isPending} = useQuery({
        queryKey: ['videoMain'],
        queryFn: () => request({url: 'http://localhost:3001/videoBlocks'})
    })

    // формируем блок с видео
    const videoBlock = isError ? <ErrorMessage/>
                    : isPending ? <Spinner/>
                    : data.map((el, i) => {
                        // ограничиваем для отображения только 3-х видео
                        if (i < 3) {
                            // созаем переменную для обозначения большого блока и передачи в props
                            const size = i === 1 ? 'videoLarge' : '';
                            return (
                                <ViewVideo key={el.id} data={el} size={size}/>
                            )
                        } else {
                            return null;
                        }
                    });

    return (
        <div className="story__presentation">
            {videoBlock}
        </div>
    )
}

const ViewVideo = ({data, size}) => {
    const {descr, time, link} = data;
    return (
        <div className="story__presentation_elem" data-size={size}>
            <div className="story__presentation_block">
                <div className="story__wrapper">
                    <ButtonPlay link={link} type='white'/>
                    <p className="story__text  roboto-bold">{descr}</p>
                    <div className="story__time roboto-regular">{time}</div>
                </div>
            </div>
        </div>
    )
}

export default VideoBlock;