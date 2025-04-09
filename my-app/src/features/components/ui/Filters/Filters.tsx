'use client';

import Link from 'next/link';
import useGetData from '../../../../services/useGetData';
import { useState, useEffect, JSX } from 'react';
import { FiltersSkeleton } from './FiltersSkeleton';

import type { FiltersDB } from '@/shared/shared-components/dataTypesFromSQL';
import type { IFilterProps } from '@/shared/shared-components/componentsTypes';
import './Filters.scss';

const Filters = () => {
    // делаем запрос для получения данных
    const {
        getData: { data, isError, isPending },
    } = useGetData('filters');

    // // стейт для фильтров
    const [filters, setFilters] = useState<JSX.Element[]>([]);

    // создаем блок с фильтрами
    useEffect(() => {
        if (data) {
            setFilters(() =>
                (data as FiltersDB[]).map((el, i) => {
                    const activeClass = i === 0 ? 'filter-active' : '';

                    return (
                        <Filter
                            key={el.id}
                            data={el as FiltersDB}
                            activeClass={activeClass}
                        />
                    );
                })
            );
        }
    }, [data]);

    return (
        <div className="article__filters">
            {isPending ? (
                <>
                    <FiltersSkeleton />
                    <FiltersSkeleton />
                    <FiltersSkeleton />
                </>
            ) : isError ? (
                <>
                    <div className="filters-error">
                        There was an error loading filters
                    </div>
                    <button className="btn btn__mini">Upload again</button>
                </>
            ) : (
                filters
            )}
        </div>
    );
};

const Filter = (props: IFilterProps) => {
    const { name } = props.data;
    return (
        <Link
            className={`article__filter roboto-bold ${props.activeClass}`}
            href={''}
        >
            {name}
        </Link>
    );
};

export default Filters;
