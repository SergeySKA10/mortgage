interface ISkillDB {
    id: string;
    icon: string;
    skill: string;
}

export interface BooksOrWebinarsDB {
    id: string;
    name: string;
    author: string;
    pictures: string[];
    category: string;
    type: string;
    link: `src/assets/database/${string}` | '';
    format: string[];
    descr: string[];
}

export interface IResourcesDB {
    books: BooksOrWebinarsDB[];
    webinars: BooksOrWebinarsDB[];
}

interface GeneralData {
    id: string;
    link: string;
    subheader: string;
    header: string;
    descr: string;
    quality: string;
    avatar: string;
    name: string;
    creation_time: string;
    skills: ISkillDB[];
    stars: string;
    icon: string;
    reviews: string;
    books: IResourcesDB;
    photo: string;
    city: string;
    profession: string;
}

export type ArticlesDB = Pick<
    GeneralData,
    | 'id'
    | 'link'
    | 'subheader'
    | 'header'
    | 'descr'
    | 'avatar'
    | 'name'
    | 'creation_time'
>;

export type FiltersDB = Pick<GeneralData, 'id' | 'name'>;

export type MentorsDB = Pick<
    GeneralData,
    'id' | 'photo' | 'link' | 'name' | 'quality' | 'descr' | 'skills'
>;

export type RatingsDB = Pick<
    GeneralData,
    'id' | 'stars' | 'icon' | 'reviews' | 'link'
>;

export type ResourcesDB = Pick<GeneralData, 'books'>;

export type SlidesReviewsDB = Pick<
    GeneralData,
    'id' | 'photo' | 'city' | 'name' | 'profession' | 'icon' | 'reviews'
>;

export type VideoDB = Pick<
    GeneralData,
    'id' | 'link' | 'descr' | 'creation_time'
>;

export type QueryData =
    | ArticlesDB[]
    | FiltersDB[]
    | MentorsDB[]
    | RatingsDB[]
    | BooksOrWebinarsDB[]
    | SlidesReviewsDB[]
    | VideoDB[]
    | IResourcesDB;

export type Data =
    | ArticlesDB[]
    | FiltersDB[]
    | MentorsDB[]
    | RatingsDB[]
    | BooksOrWebinarsDB[]
    | SlidesReviewsDB[]
    | VideoDB[];
