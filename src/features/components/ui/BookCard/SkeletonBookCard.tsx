import { Line } from '../Line/Line';
import './BookCard.scss';

export const SkeletonBookCard = ({
    type = '',
}: {
    type?: 'download' | 'video' | '';
}) => {
    const button =
        type === 'download' ? (
            <button
                className="btn btn__watch-download"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
            />
        ) : type === 'video' ? (
            <button
                className="btn btn__watch"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    border: 'none',
                }}
            />
        ) : null;

    return (
        <div className="article__resources_block-skeleton">
            <div className="article__resources_descr">
                <div className="article__resources_descr-img-skeleton animation-skeleton"></div>
                <div className="article__resources_descr-book">
                    <div className="article__logo-book-skeleton animation-skeleton"></div>
                    <div className="article__book-skeleton animation-skeleton"></div>
                </div>
            </div>
            <div className="article__resources__line animation-skeleton">
                <Line />
            </div>
            <div className="article__resources_button animation-skeleton">
                {button}
            </div>
        </div>
    );
};
