export interface IBookState {
    author: string;
    nameBook: string;
    format: string[];
    indexActiveFormat: number;
}

export interface IBookContext extends IBookState {
    setAuthor: (newAuthor: string) => void;
    setnameBook: (newName: string) => void;
    setFormat: (newFormat: string[]) => void;
    setIndexActiveFormat: (newIndex: number) => void;
}
