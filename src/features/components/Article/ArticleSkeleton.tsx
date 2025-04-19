import { SkeletonArticleCard } from '../ui/ArticleCard/SkeletonArticleCard';
import './Article.scss';

export const ArticleSkeleton = () => {
    return (
        <div className="article__education_wrapper">
            <SkeletonArticleCard size="large" />
            <SkeletonArticleCard />
            <SkeletonArticleCard />
        </div>
    );
};
