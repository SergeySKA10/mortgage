import { JSX } from 'react';

export interface IContent {
    process: string;
    isError: boolean;
    isPending: boolean;
    Components: JSX.Element | [];
}
