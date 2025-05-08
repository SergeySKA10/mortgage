'use client';

import { usePathname } from 'next/navigation';
import setContent from '@/utils/setContent';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getOptions } from '../../../services/getOptions';
import ArticleCard from '../ui/ArticleCard/ArticleCard';
import { ErrorServerMessage } from '../ui/ErrorMessage/ErrorServerMessage';

export const EducationInfo = () => {
    const { data } = useSuspenseQuery(getOptions('articles'));
    const location = usePathname();

    if (data.isError) {
        return (
            <>
                <ErrorServerMessage message={data.message} id={'articles'} />
            </>
        );
    }

    const id =
        location === '/blog'
            ? 'education-blog'
            : location === '/secondebook'
            ? 'secondbook-articles'
            : '';

    return (
        <div id={id} className="blog_education__wrapper">
            {id === 'education-blog'
                ? setContent({
                      data,
                      Component: ArticleCard,
                      sorted: 'creation_time',
                      dataAtr: [
                          {
                              index: 0,
                              value: 'large',
                          },
                          {
                              index: 6,
                              value: 'large-right',
                          },
                      ],
                  })
                : id === 'secondbook-articles'
                ? setContent({
                      data,
                      Component: ArticleCard,
                      sorted: 'creation_time',
                      limitContent: 3,
                  })
                : null}
            {}
        </div>
    );
};
