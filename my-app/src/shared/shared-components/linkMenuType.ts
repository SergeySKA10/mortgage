export interface ILink {
    id: string;
    link: `/${string}`;
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
