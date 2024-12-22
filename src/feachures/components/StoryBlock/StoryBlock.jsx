import SliderStory from "../SliderStory/SliderStory";
import VideoBlock from "../VideoBlock/VideoBlock";
import PopUpWindow from "../PopUpWindow/PopUpWindow";

import './StoryBlock.scss';
import './StoryBlockMedia.scss';

const StoryBlock = () => {
    return (
        <section class="story">
      
            <h2 class="header__h2-left roboto-bold">Your mortgage journey is a story...</h2>
            <h3 class="header__h3-left roboto-regular">It's not just about clicking a button.</h3>

            <div class="story__block">
                <SliderStory/>
                <VideoBlock/>
            </div>
            <PopUpWindow/>      
        </section>
    )
}

export default StoryBlock;