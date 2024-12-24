import { useSelector } from 'react-redux';

import './VideoBlock.scss';

const VideoBlock = () => {
    // получаем видео из store для формирования блока с видео
    const videos = useSelector(state => state.reducer.videoBlocks);

    // формируем блок с видео
    const videoBlock = videos.map((el, i) => {

        // ограничиваем для отображения только 3-х видео
        if (i < 3) {
            // созаем переменную для обозначения большого блока и передачи в props
            const size = i === 1 ? 'videoLarge' : '';

            return (
                <ViewVideo data={el} size={size}/>
            )
        }
        
    });

    return (
        <div className="story__presentation">
            {videoBlock}
        </div>
    )
}

const ViewVideo = ({data, size}) => {
    const {id, descr, time} = data;
    return (
        <div key={id} className="story__presentation_elem" data-size={size}>
            <div className="story__presentation_block">
                <div className="story__wrapper">
                    <button className="btn btn__play-white">
                        <a href="#"><div className="btn__play-white-block"></div></a>
                    </button>
                    <p className="story__text  roboto-bold">{descr}</p>
                    <div className="story__time roboto-regular">{time}</div>
                </div>
            </div>
        </div>
    )
}

export default VideoBlock;