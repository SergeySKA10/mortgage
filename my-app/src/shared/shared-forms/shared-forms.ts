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
