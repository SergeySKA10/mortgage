import { SkeletonArticleCard } from '../ui/ArticleCard/SkeletonArticleCard';

export const SkeletonEducation = () => {
    return (
        <div className="blog_education__wrapper">
            <SkeletonArticleCard />
            <SkeletonArticleCard />
            <SkeletonArticleCard />
        </div>
    );
};
