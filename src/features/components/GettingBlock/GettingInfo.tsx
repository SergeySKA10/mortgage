'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { getOptions } from '../../../services/getOptions';
import setContent from '../../../utils/setContent';
import SpeakerCard from '../ui/SpeakerCard/SpeakerCard';
import ErrorMessage from '../ui/ErrorMessage/ErrorMessage';

const GettingInfo = () => {
    const { data } = useSuspenseQuery(getOptions('mentors'));

    if (data.isError) {
        return (
            <>
                <ErrorMessage message={data.message} path="/" />
            </>
        );
    }

    return (
        <>
            {setContent({
                data: data,
                Component: SpeakerCard,
            })}
        </>
    );
};

export default GettingInfo;
