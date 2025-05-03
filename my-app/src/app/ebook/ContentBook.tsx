import BookContextProvider from './context/BookContext';
import PromoEbook from '@/features/components/PromoEbook/PromoEbook';
import AboutEbook from '@/features/components/Ebook/AboutEbook';

export const ContentBook = () => {
    return (
        <BookContextProvider>
            <PromoEbook />
            {/* <AboutEbook /> */}
        </BookContextProvider>
    );
};
