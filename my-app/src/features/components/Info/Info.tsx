import useGetData from '../../../services/useGetData';
import Image from 'next/image';
import { useEffect } from 'react';
import ErrorMessage from '../ui/ErrorMessage/ErrorMessage';
import { SkeletonInfo } from './SkeletonInfo';
import type ISecondBookProps from '@/shared/shared-components/componentsTypes';
import type { IResourcesDB } from '@/shared/shared-components/dataTypesFromSQL';
import type { BooksOrWebinarsDB } from '@/shared/shared-components/dataTypesFromSQL';

import './Info.scss';
import './InfoMedia.scss';

const Info = ({ setAuthor, setNameBook, setLoading }: ISecondBookProps) => {
    // получение данных
    const {
        getData: { data, isError, isPending, refetch },
    } = useGetData('resources');

    // запись в state автора и название книги
    useEffect(() => {
        if (data && setAuthor && setNameBook && setLoading) {
            setLoading(false);
            setAuthor((data as IResourcesDB).books[1].author);
            setNameBook((data as IResourcesDB).books[1].name);
        }
    }, [data]);

    return (
        <section className="info">
            <div className="info__wrapper">
                {isError ? (
                    <ErrorMessage refetch={refetch} />
                ) : isPending ? (
                    <SkeletonInfo />
                ) : (
                    <InfoViewWrapper data={(data as IResourcesDB).books[1]} />
                )}
            </div>
        </section>
    );
};

const InfoViewWrapper = ({
    data: { descr, pictures },
}: {
    data: BooksOrWebinarsDB;
}) => {
    return (
        <>
            <div className="info__block">
                <h2 tabIndex={0} className="header__h2-left roboto-bold">
                    What`s in the report
                </h2>
                <div tabIndex={0} className="info__descr roboto-regular">
                    {descr[0]}
                </div>
            </div>
            <div className="info__block">
                <h4 tabIndex={0} className="header__h4 roboto-bold">
                    1st thing
                </h4>
                <div tabIndex={0} className="info__block_descr roboto-regular">
                    {descr[1]}
                </div>
                <div className="info__block_img">
                    <Image
                        tabIndex={0}
                        src={pictures[0]}
                        alt="mountains"
                        width={646}
                        height={334}
                    />
                </div>
            </div>
            <div className="info__block">
                <h4 tabIndex={0} className="header__h4 roboto-bold">
                    2st thing
                </h4>
                <div tabIndex={0} className="info__block_descr roboto-regular">
                    {descr[2]}
                </div>
                <div className="info__block_img">
                    <Image
                        tabIndex={0}
                        src={pictures[1]}
                        alt="space"
                        width={646}
                        height={334}
                    />
                </div>
            </div>
        </>
    );
};

export default Info;
