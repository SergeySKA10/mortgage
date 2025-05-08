'use client';

import useGetData from '@/services/useGetData';
import { useState, useEffect } from 'react';
import setContent from '@/utils/setContent';
import type { Key } from '@/shared/shared-services/shared-getData';
import type { IContent } from '@/shared/shared-utils/setContentType';
import type { IResourcesDB } from '@/shared/shared-components/dataTypesFromSQL';

import SpeakerCard from '../SpeakerCard/SpeakerCard';
import VideoCard from '../VideoCard/VideoCard';
import RatingCard from '../RatingCard/RatingCard';
import ArticleCard from '../ArticleCard/ArticleCard';
import BookCard from '../BookCard/BookCard';

import { SkeletonGettingBlock } from '../../GettingBlock/SkeletonGettingBlock';
import { VideoBlockSkeleton } from '../../VideoBlock/VideoBlockSkeleton';
import { RatingSkeleton } from '../../Rating/RatingSkeleton';
import { ArticleSkeleton } from '../../Article/ArticleSkeleton';
import { ResourceSkeleton } from '../../Resource/ResourceSkeleton';

import Image from 'next/image';

export const ErrorServerMessage = ({
    id,
    message,
}: {
    id: Key;
    message: string;
}) => {
    // state для повтороной загрузки и disabled
    const [upload, setUpload] = useState<boolean>(false);
    const [pressBtn, setPressBtn] = useState<boolean>(false);

    // переменные для формирования контента
    let component: IContent['Component'],
        skeleton: IContent['Skeleton'],
        sorted: IContent['sorted'] = null,
        limit: IContent['limitContent'] = null,
        dataAtr: IContent['dataAtr'] = null;

    // инициализация переменных контента
    switch (id) {
        case 'mentors':
            component = SpeakerCard;
            skeleton = SkeletonGettingBlock;
            break;
        case 'video':
            component = VideoCard;
            skeleton = VideoBlockSkeleton;
            sorted = 'creation_time';
            limit = 3;
            dataAtr = [
                {
                    index: 1,
                    value: 'videoLarge',
                },
            ];
            break;
        case 'ratings':
            component = RatingCard;
            skeleton = RatingSkeleton;
            break;
        case 'articles':
            component = ArticleCard;
            skeleton = ArticleSkeleton;
            sorted = 'creation_time';
            limit = 3;
            dataAtr = [
                {
                    index: 0,
                    value: 'large',
                },
            ];
            break;
        case 'resources':
            component = BookCard;
            skeleton = ResourceSkeleton;
    }

    useEffect(() => {
        if (pressBtn) {
            setUpload((upload) => !upload);
        }
    }, [pressBtn]);

    useEffect(() => {
        if (pressBtn) {
            setPressBtn((pressBtn) => !pressBtn);
        }
    }, [upload]);

    // запрос на получение данных
    const {
        process,
        getData: { data, isError, isPending, refetch },
    } = useGetData(id);

    return (
        <>
            {upload ? (
                setContent({
                    process,
                    isError,
                    isPending,
                    data:
                        id === 'resources'
                            ? [
                                  (data as IResourcesDB).books[0],
                                  (data as IResourcesDB).webinars[0],
                              ]
                            : data,
                    refetch,
                    Component: component!,
                    Skeleton: skeleton,
                    sorted,
                    limitContent: limit,
                    dataAtr,
                })
            ) : (
                <div
                    style={{
                        color: 'red',
                        textAlign: 'center',
                        display: 'block',
                        margin: '0 auto',
                    }}
                >
                    <p
                        tabIndex={0}
                        style={{
                            marginBottom: '10px',
                            display: 'block',
                            maxWidth: '310px',
                        }}
                    >
                        {message}
                    </p>
                    <Image
                        tabIndex={0}
                        src={'/error/errorMessage.png'}
                        width={50}
                        height={50}
                        alt="error"
                        style={{
                            display: 'block',
                            margin: '0 auto',
                            objectFit: 'contain',
                            width: '50px',
                            height: '50px',
                            marginBottom: '10px',
                        }}
                    />
                    <button
                        className="btn btn__mini"
                        disabled={pressBtn}
                        onClick={() => setPressBtn((pressBtn) => !pressBtn)}
                    >
                        Try again
                    </button>
                </div>
            )}
        </>
    );
};
