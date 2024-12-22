import './VideoBlock.scss';

const VideoBlock = () => {
    return (
        <div class="story__presentation">
            <div id="story-first" class="story__presentation_elem">
                <div class="story__presentation_block">
                    <div class="story__wrapper">
                        <button class="btn btn__play-white">
                            <a href="#"><div class="btn__play-white-block"></div></a>
                        </button>
                        <p class="story__text  roboto-bold">The difference between «fixed rate» and «adjustable»</p>
                        <div class="story__time roboto-regular">0:29</div>
                    </div>
                </div>
            </div>

            <div class="story__presentation_elem">
                <div class="story__presentation_block">
                    <div class="story__wrapper">
                        <button class="btn btn__play-white">
                            <a href="#"><div class="btn__play-white-block"></div></a>
                        </button>
                        <p class="story__text  roboto-bold">What are points and credits?</p>
                        <div class="story__time roboto-regular">0:27</div>
                    </div>
                </div>
            </div>

            <div class="story__presentation_elem">
              <div class="story__presentation_block">
                    <div class="story__wrapper">
                        <button class="btn btn__play-white">
                        <a href="#"><div class="btn__play-white-block"></div></a>
                        </button>
                        <p class="story__text  roboto-bold">What are points and credits?</p>
                        <div class="story__time roboto-regular">0:27</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoBlock;