import SliderStory from "../SliderStory/SliderStory";
import VideoBlock from "../VideoBlock/VideoBlock";
import PopUpWindow from "../PopUpWindow/PopUpWindow";

import './StoryBlock.scss';
import './StoryBlockMedia.scss';

const StoryBlock = () => {
    return (
        <section id="story" className="story">
      
            <h2 className="header__h2-left roboto-bold">Your mortgage journey is a story...</h2>
            <h3 className="header__h3-left roboto-regular">It's not just about clicking a button.</h3>

            <div className="story__block">
                <SliderStory/>
                <VideoBlock/>
            </div>
            <PopUpWindow/>      
        </section>
    )
}

export default StoryBlock;