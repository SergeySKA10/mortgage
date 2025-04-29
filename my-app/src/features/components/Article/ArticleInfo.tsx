'use client';

import setContent from '@/utils/setContent';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getOptions } from '../../../services/getOptions';
import ArticleCard from '../ui/ArticleCard/ArticleCard';
import { ErrorServerMessage } from '../ui/ErrorMessage/ErrorServerMessage';

export const ArticleInfo = () => {
    const { data } = useSuspenseQuery(getOptions('articles'));

    if (data.isError) {
        return (
            <>
                <ErrorServerMessage message={data.message} id={'articles'} />
            </>
        );
    }

    return (
        <>
            {/* {sortByParam(data, 'creation_time').map((el, i) => {
                // делаем ограничение до 3-х блоков
                if (i < 3) {
                    // созаем переменную для обозначения большого блока и передачи в props
                    const large = i === 0 ? 'large' : '';

                    return (
                        <ArticleCard
                            key={el.id}
                            data={el as ArticlesDB}
                            index={i}
                            size={large}
                        />
                    );
                }
            })} */}
            {setContent({
                data,
                Component: ArticleCard,
                sorted: 'creation_time',
                dataAtr: [
                    {
                        index: 0,
                        value: 'large',
                    },
                ],
                limitContent: 3,
            })}
        </>
    );
};
