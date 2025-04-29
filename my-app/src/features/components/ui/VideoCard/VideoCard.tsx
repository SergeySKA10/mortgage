import { useGetDurationVideo } from '../../../api/youtubeApi';
import { ButtonPlay } from '../Buttons/ButtonPlay';
import type { IVideoCardProps } from '@/shared/shared-components/componentsTypes';

import './VideoCard.scss';

const VideoCard = ({ data }: IVideoCardProps) => {
    const { descr, link, size } = data;
    const time = useGetDurationVideo(link);

    return (
        <div tabIndex={0} className="story__presentation_elem" data-size={size}>
            <div className="story__presentation_block">
                <div className="story__wrapper">
                    <ButtonPlay link={link} type="white" text={''} />
                    <p tabIndex={0} className="story__text  roboto-bold">
                        {descr}
                    </p>
                    <div tabIndex={0} className="story__time roboto-regular">
                        {time}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
