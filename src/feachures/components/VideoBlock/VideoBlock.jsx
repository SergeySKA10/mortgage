import './VideoBlock.scss';

const VideoBlock = () => {
    const initialState = {
        videoBlocks: [
            {
                descr: 'The difference between «fixed rate» and «adjustable»',
                time: '0:29'
            },
            {
                descr: 'What are points and credits?',
                time: '0:27'
            },
            {
                descr: 'What are points and credits?',
                time: '0:27'
            }
        ]
    }

    const videos = initialState.videoBlocks.map((el, i) => {
        const id = i === 1 ? 'story-first' : '';

        return (
            <ViewVideo id={id} descr={el.descr} time={el.time}/>
        )
    });

    return (
        <div class="story__presentation">
            {videos}
        </div>
    )
}

const ViewVideo = (props) => {
    const {id, descr, time} = props;
    return (
        <div id={id} class="story__presentation_elem">
            <div class="story__presentation_block">
                <div class="story__wrapper">
                    <button class="btn btn__play-white">
                        <a href="#"><div class="btn__play-white-block"></div></a>
                    </button>
                    <p class="story__text  roboto-bold">{descr}</p>
                    <div class="story__time roboto-regular">{time}</div>
                </div>
            </div>
        </div>
    )
}

export default VideoBlock;