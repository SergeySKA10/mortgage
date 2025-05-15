'use client';

import { useAppSelector } from '@/hooks/redux.hooks';
import { Slide } from '@/features/components/ui/SliderStory/SliderStory';
import { ButtonDashboard } from '@/features/components/ui/Buttons/ButtonDashboard';
import type { KeyQuery } from '@/shared/shared-components/dashboardTypes';
import { JSX } from 'react';

export const DashboardStoreInfo = ({ category }: { category: KeyQuery }) => {
    const state = useAppSelector((state) => state);
    let content: JSX.Element[];

    switch (category) {
        case 'stories':
            content = state.sliderStory.slidesStory.map((el, i) => {
                return (
                    <div key={`${i}`} className="cards-wrapper">
                        <Slide data={el} activeClass="" current={`${i + 1}`} />
                        <div className="cards-wrapper-btn">
                            <ButtonDashboard
                                text="Change"
                                type="mini"
                                action={'change'}
                            />
                            <ButtonDashboard
                                text="Delete"
                                type="mini"
                                color="red"
                                action={'delete'}
                            />
                        </div>
                    </div>
                );
            });
            break;
        default:
            throw new Error(
                'Incorrect query. Props: category incorrect in DashboardStoreInfo component'
            );
    }

    return <>{content}</>;
};
