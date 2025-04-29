'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { getOptions } from '../../../services/getOptions';
import setContent from '../../../utils/setContent';
import SpeakerCard from '../ui/SpeakerCard/SpeakerCard';
import { ErrorServerMessage } from '../ui/ErrorMessage/ErrorServerMessage';

const GettingInfo = () => {
    const { data } = useSuspenseQuery(getOptions('mentors'));

    if (data.isError) {
        return (
            <>
                <ErrorServerMessage message={data.message} id="mentors" />
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
