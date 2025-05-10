'use client';

import useGetData from '../../../services/useGetData';
import { JSX, useContext } from 'react';
import { BookContext } from '@/app/(main)/ebook/context/BookContext';
import Image from 'next/image';
import { SkeletonAboutEbook } from './SkeletonAboutEbook';
import ErrorMessage from '../ui/ErrorMessage/ErrorMessage';
import type { IResourcesDB } from '@/shared/shared-components/dataTypesFromSQL';
import type { IAboutEbookWrapperProps } from '@/shared/shared-components/componentsTypes';

import { useEffect } from 'react';

import Form from '../ui/Form/Form';

import './AboutEbook.scss';
import './AboutEbookMedia.scss';

const AboutEbook = () => {
    // получение данных
    const {
        getData: { data, isError, isPending, refetch },
    } = useGetData('resources');

    const { setAuthor, setFormat, setnameBook, indexActiveFormat } =
        useContext(BookContext);

    // запись в state автора и название книги
    useEffect(() => {
        if (data) {
            setAuthor((data as IResourcesDB).books[0].author);
            setnameBook((data as IResourcesDB).books[0].name);
            setFormat((data as IResourcesDB).books[0].format);
        }
    }, [data]);

    const content = isError ? (
        <ErrorMessage refetch={refetch} />
    ) : isPending ? (
        <SkeletonAboutEbook />
    ) : (
        <AboutEbookWrapper
            data={{
                pictures: (data as IResourcesDB).books[0].pictures,
                descr: (data as IResourcesDB).books[0].descr,
                format: (data as IResourcesDB).books[0].format,
                index: indexActiveFormat,
            }}
        />
    );

    return <section className="about_ebook">{content as JSX.Element}</section>;
};

const AboutEbookWrapper = ({ data }: IAboutEbookWrapperProps) => {
    const { pictures, descr, format, index } = data;
    return (
        <div className="about_ebook__wrapper">
            <div className="about_ebook__cover">
                <Image
                    tabIndex={0}
                    src={pictures[0]}
                    alt="cover"
                    width={540}
                    height={752}
                />
            </div>
            <div className="about_ebook__content">
                <h2 tabIndex={0} className="header__h2-left roboto-bold">
                    About the book
                </h2>
                <p tabIndex={0} className="about_ebook__descr roboto-regular">
                    {descr[0]}
                </p>
                <Form
                    format={format}
                    index={index}
                    id="book-form"
                    text="Get the eBook"
                />
            </div>
        </div>
    );
};

export default AboutEbook;
