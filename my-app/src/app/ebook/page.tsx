import { ContentBook } from './ContentBook';
import Report from '@/features/components/Report/Report';
import Author from '@/features/components/Author/Author';
import Start from '@/features/components/Start/Start';

import '@/style/global.css';

export default function Ebook() {
    return (
        <>
            <ContentBook />
            <Report />
            <Author />
            <Start />
        </>
    );
}
