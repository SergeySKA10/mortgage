import { SkeletonSpeakerCard } from '../ui/SpeakerCard/SkeletonSpeakerCard';
import './GettingBlock.scss';
import './GettingBlockMedia.scss';

export const SkeletonGettingBlock = () => {
    return (
        <div className="getting__speakers">
            <SkeletonSpeakerCard />
            <SkeletonSpeakerCard />
        </div>
    );
};
