'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { getOptions } from '../../../services/getOptions';
import { sortByDate } from '../../../utils/sortByDate';
import ArticleCard from '../ui/ArticleCard/ArticleCard';

import type { ArticlesDB } from '@/shared/shared-components/dataTypesFromSQL';

export const ArticleInfo = () => {
    const { data } = useSuspenseQuery(getOptions('articles'));

    return (
        <>
            {sortByDate(data, 'creation_time').map((el, i) => {
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
            })}
        </>
    );
};
