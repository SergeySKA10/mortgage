'use client';

import useGetData from '../../../services/useGetData';
import setContent from '../../../utils/setContent';
import { useContext } from 'react';
import { BookContext } from '@/app/ebook/context/BookContext';
import Image from 'next/image';
import { SkeletonAboutEbook } from './SkeletonAboutEbook';
import type { IResourcesDB } from '@/shared/shared-components/dataTypesFromSQL';

import { useEffect } from 'react';

// import Form from '../ui/Form/Form';

import './AboutEbook.scss';
import './AboutEbookMedia.scss';

const AboutEbook = () => {
    // получение данных
    const {
        process,
        getData: { data, isError, isPending },
    } = useGetData('resources');

    const { setAuthor, setnameBook, setFormat, format } =
        useContext(BookContext);

    const content = setContent({
        process,
        isError,
        isPending,
        Skeleton: SkeletonAboutEbook,
        Component: AboutEbookWrapper,
        data: data,
    });

    // запись в state автора и название книги
    useEffect(() => {
        if (data) {
            setAuthor((data as IResourcesDB).books[0].author);
            setnameBook((data as IResourcesDB).books[0].name);
            setFormat((data as IResourcesDB).books[0].format);
        }
    }, [data]);

    return <section className="about_ebook">{{ content }}</section>;
};

const AboutEbookWrapper = ({ data: { pictures, descr, format, index } }) => {
    return (
        <div className="about_ebook__wrapper">
            <div className="about_ebook__cover">
                <Image src={pictures[0]} alt="cover" width={90} height={120} />
            </div>
            <div className="about_ebook__content">
                <h2 className="header__h2-left roboto-bold">About the book</h2>
                <p className="about_ebook__descr roboto-regular">{descr[0]}</p>
                {/* <Form format={format} index={index} id='book-form' text='Get the eBook'/> */}
            </div>
        </div>
    );
};

export default AboutEbook;
