'use client';

import { useAppSelector } from '@/hooks/redux.hooks';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useState, useEffect, MouseEvent } from 'react';
import { Line } from '@/features/components/ui/Line/Line';
import { KeyQuery } from '@/shared/shared-components/dashboardTypes';
import './SideNav.scss';

export const SideNav = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const listItmes = useAppSelector((state) => state.sidenav);

    const onChangeParams = (key: KeyQuery): void => {
        const params = new URLSearchParams(searchParams);
        params.set('query', key);
        replace(`${pathname}?${params.toString()}`);
    };

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [activeElem, setActiveElem] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        if (activeElem) {
            onChangeActiveElem(activeElem);
        }
    }, [activeElem]);

    const onChangeActiveElem = (el: HTMLDivElement) => {
        el.classList.add('active-category');
    };

    useEffect(() => {
        activeElem?.classList.remove('active-category');
        setActiveElem(
            document.querySelector(
                `[data-indx="${activeIndex}"]`
            ) as HTMLDivElement
        );
    }, [activeIndex]);

    return (
        <aside className="aside">
            <h1 className="header__h1">Dashboard</h1>
            <Line />
            <h2
                className="header__h2"
                style={{ fontSize: '25px', opacity: '0.5' }}
            >
                Database
            </h2>
            <nav className="aside-navigation">
                <ul>
                    {listItmes.dbList.map((el, i) => {
                        return (
                            <li key={i}>
                                <div
                                    onClick={(
                                        e: MouseEvent<
                                            HTMLDivElement,
                                            MouseEvent
                                        >
                                    ) => {
                                        onChangeParams(el.id);
                                        setActiveIndex(
                                            +(
                                                e.target as HTMLElement
                                            ).getAttribute('data-indx')!
                                        );
                                    }}
                                    className="aside-navigation-item"
                                    data-indx={i}
                                >
                                    {el.name}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <Line />
            <h2
                className="header__h2"
                style={{ fontSize: '25px', opacity: '0.5' }}
            >
                Store
            </h2>
            <nav className="aside-navigation">
                <ul>
                    {listItmes.storeList.map((el, i) => {
                        return (
                            <li key={i}>
                                <div
                                    onClick={(
                                        e: MouseEvent<
                                            HTMLDivElement,
                                            MouseEvent
                                        >
                                    ) => {
                                        onChangeParams(el.id);
                                        setActiveIndex(
                                            +(
                                                e.target as HTMLElement
                                            ).getAttribute('data-indx')!
                                        );
                                    }}
                                    className="aside-navigation-item"
                                    data-indx={i + listItmes.dbList.length}
                                >
                                    {el.name}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <Line />
            <h2
                className="header__h2"
                style={{ fontSize: '25px', opacity: '0.5' }}
            >
                User requests
            </h2>
            <nav className="aside-navigation">
                <ul>
                    {listItmes.requestList.map((el, i) => {
                        return (
                            <li key={i}>
                                <div
                                    onClick={(
                                        e: MouseEvent<
                                            HTMLDivElement,
                                            MouseEvent
                                        >
                                    ) => {
                                        onChangeParams(el.id);
                                        setActiveIndex(
                                            +(
                                                e.target as HTMLElement
                                            ).getAttribute('data-indx')!
                                        );
                                    }}
                                    className="aside-navigation-item"
                                    data-indx={
                                        i +
                                        listItmes.dbList.length +
                                        listItmes.storeList.length
                                    }
                                >
                                    {el.name}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <Line />
            <h2
                className="header__h2"
                style={{ fontSize: '25px', opacity: '0.5' }}
            >
                Statistics
            </h2>
            <nav className="aside-navigation">
                <ul>
                    {listItmes.statisticsSheet.map((el, i) => {
                        return (
                            <li key={i}>
                                <div
                                    onClick={(
                                        e: MouseEvent<
                                            HTMLDivElement,
                                            MouseEvent
                                        >
                                    ) => {
                                        onChangeParams(el.id);
                                        setActiveIndex(
                                            +(
                                                e.target as HTMLElement
                                            ).getAttribute('data-indx')!
                                        );
                                    }}
                                    className="aside-navigation-item"
                                    data-indx={
                                        i +
                                        listItmes.dbList.length +
                                        listItmes.requestList.length +
                                        listItmes.storeList.length
                                    }
                                >
                                    {el.name}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
};
