export interface IFormProps {
    id: string;
    text: string;
    format?: string[] | null;
    index?: number | null;
}

export interface IInputBook {
    email: string;
}

export interface IFormArticles {
    link: string;
    subheader: string;
    header: string;
    descr: string;
    avatar: string;
    name: string;
}

export interface IFormMentors {
    photo: string;
    link: string;
    name: string;
    quality: string;
    descr: string;
}

export interface IFormVideo {
    link: string;
    descr: string;
}

export interface IFormResource {
    name: string;
    author: string;
    pictures: string;
    category: string;
    type: string;
    link?: string;
    format?: string;
    descr: string;
}
