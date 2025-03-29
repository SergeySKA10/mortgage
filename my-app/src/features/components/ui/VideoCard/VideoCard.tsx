import { useGetDurationVideo } from '../../../api/youtubeApi';
import { ButtonPlay } from '../Buttons/ButtonPlay';
import type { IVideoCardProps } from '@/shared/shared-components/componentsTypes';

import './VideoCard.scss';

const VideoCard = ({ data, size = '' }: IVideoCardProps) => {
    const { descr, link } = data;
    const time = useGetDurationVideo(link);

    return (
        <div className="story__presentation_elem" data-size={size}>
            <div className="story__presentation_block">
                <div className="story__wrapper">
                    <ButtonPlay link={link} type="white" />
                    <p className="story__text  roboto-bold">{descr}</p>
                    <div className="story__time roboto-regular">{time}</div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
