interface ISkills {
    id: string;
    icon: string;
    skill: string;
}

interface BooksOrWebinars {
    id: string;
    name: string;
    author: string;
    pictures: string[];
    category: string;
    type: string;
    link: string;
    format: string[];
    descr: string[];
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
    skills: ISkills;
    stars: string;
    icon: string;
    reviews: string;
    books: BooksOrWebinars[];
    photo: string;
    city: string;
    profession: string;
}

export type Articles = Pick<
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

export type Filters = Pick<GeneralData, 'id' | 'name'>;

export type Mentors = Pick<
    GeneralData,
    'id' | 'photo' | 'link' | 'name' | 'quality' | 'descr' | 'skills'
>;

export type Ratings = Pick<GeneralData, 'id' | 'stars' | 'icon' | 'reviews'>;

export type Resources = Pick<GeneralData, 'books'>;

export type SlidesReviews = Pick<
    GeneralData,
    'id' | 'photo' | 'city' | 'name' | 'profession' | 'icon' | 'reviews'
>;

export type Video = Pick<
    GeneralData,
    'id' | 'link' | 'descr' | 'creation_time'
>;
