import { Dispatch, SetStateAction } from 'react';
import type { MentorsDB } from '@/shared/shared-components/dataTypesFromSQL';
import type { VideoDB } from '@/shared/shared-components/dataTypesFromSQL';
import type { RatingsDB } from '@/shared/shared-components/dataTypesFromSQL';
import type { FiltersDB } from '@/shared/shared-components/dataTypesFromSQL';
import type { ArticlesDB } from '@/shared/shared-components/dataTypesFromSQL';
import { BooksOrWebinarsDB } from '@/shared/shared-components/dataTypesFromSQL';
import type { SlidesReviewsDB } from '@/shared/shared-components/dataTypesFromSQL';

export interface ILink {
    id: string;
    link: `/${string}` | string;
    text: string;
}

export interface ILinks {
    linksOnPages: {
        pages: ILink[];
    };
    linksOnSection: {
        [key: string]: ILink[];
    };
}

export interface ISpeakerCardProps {
    data: MentorsDB;
}

export interface ISlideStory {
    id: string;
    header: string;
    descr: string;
}

export interface ISlidesStoryProps {
    key: string;
    data: ISlideStory;
    activeClass: 'slide-active' | '';
    current: string;
}

export interface IStateSlideStory {
    slidesStory: ISlideStory[];
}

export interface IDotsSliderStoryProps {
    key: number;
    data: number;
    activeClass: 'dot-active' | '';
    wrapper: HTMLElement | null;
    setOffset: Dispatch<SetStateAction<number>>;
    width: number;
    setIndexSlide: Dispatch<SetStateAction<number>>;
    setPressDot: Dispatch<SetStateAction<boolean>>;
}

export interface IVideoCardProps {
    data: VideoDB & { size?: 'videoLarge' | '' };
}

type PopUpActive = 'popUpActive' | 'hide';

export interface IStatePopUp {
    popUpWindow: PopUpActive;
}

export interface IRatingsProps {
    data: RatingsDB;
}

export interface ISlideReview {
    data: SlidesReviewsDB;
}

export interface IDotReview {
    key: number;
    data: number;
    activeClass: 'dot-active-white' | '';
    setIndexSlide: Dispatch<SetStateAction<number>>;
    width: number;
    setOffset: Dispatch<SetStateAction<number>>;
    setPressDot: Dispatch<SetStateAction<boolean>>;
}

export interface IFilterProps {
    key: string;
    data: FiltersDB;
    activeClass: 'filter-active' | '';
}

export interface IArticleCardProps {
    data: ArticlesDB & {
        size?: 'large' | 'large-right' | '';
        order?: { order: string };
    };
}

export interface IBookCardProps {
    data: BooksOrWebinarsDB;
}

export interface IButtonProps {
    type?: 'white' | 'mini' | '';
    link: string;
    text: string;
}

export interface IButtonDashboard {
    type: 'create' | 'mini' | '';
    text: string;
    color?: '' | 'red';
}

export type IButtonWatchProps = Pick<IButtonProps, 'link'>;

export interface IButtonFormProps {
    text: string;
}

export interface IButtonsArrowsProps {
    type: 'left' | 'right';
    data: 'next' | 'prev';
    offset: number;
    setOffset: Dispatch<SetStateAction<number>>;
    maxOffset: number;
    width: number;
    setPressButton: Dispatch<SetStateAction<boolean>>;
    setIndexSlide: Dispatch<SetStateAction<number>>;
    indexSlide: number;
}

export interface IButtonDownload {
    path: `src/assets/database/${string}` | '';
    name: string;
}

export interface IReport {
    id: string;
    src: string;
    header: string;
    descr: string;
}

export interface IReports {
    report: IReport[];
}

export interface IAuthorCardProps {
    data: MentorsDB;
}

export interface IWebinarPromoProps {
    data: BooksOrWebinarsDB;
}

export interface IAboutEbookWrapperProps {
    data: {
        pictures: string[];
        descr: string[];
        format: string[];
        index: number;
    };
}

export default interface ISecondBookProps {
    loading?: boolean;
    setLoading?: Dispatch<SetStateAction<boolean>>;
    author?: string;
    nameBook?: string;
    setAuthor?: Dispatch<SetStateAction<string>>;
    setNameBook?: Dispatch<SetStateAction<string>>;
}
