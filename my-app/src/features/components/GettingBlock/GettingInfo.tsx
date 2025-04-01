'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { getOptions } from './getOptions';
import setContent from '../../../utils/setContent';
import SpeakerCard from '../ui/SpeakerCard/SpeakerCard';

const GettingInfo = () => {
    const { data, isError, isPending } = useSuspenseQuery(
        getOptions('mentors')
    );

    return (
        <>
            {setContent({
                process: 'render',
                isError,
                isPending,
                data: data,
                Component: SpeakerCard,
            })}
        </>
    );
};

export default GettingInfo;
