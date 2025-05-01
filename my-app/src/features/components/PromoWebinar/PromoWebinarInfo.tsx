'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { getOptions } from '@/services/getOptions';
import setContent from '@/utils/setContent';
import { ErrorServerMessage } from '../ui/ErrorMessage/ErrorServerMessage';

import Image from 'next/image';
import { ButtonPlay } from '../ui/Buttons/ButtonPlay';
// import Form from '../ui/Form/Form';
import { useGetDurationVideo } from '../../api/youtubeApi';
import type { IResourcesDB } from '@/shared/shared-components/dataTypesFromSQL';
import type { IWebinarPromoProps } from '@/shared/shared-components/componentsTypes';

export const PromoWebinarInfo = () => {
    const { data } = useSuspenseQuery(getOptions('resources'));

    if (data.isError) {
        return (
            <>
                <ErrorServerMessage message={data.message} id={'resources'} />
            </>
        );
    }

    return (
        <>
            {setContent({
                data: [(data as IResourcesDB).webinars[0]],
                Component: PromoWebinarView,
            })}
        </>
    );
};

const PromoWebinarView = ({
    data: { name, author, descr, link },
}: IWebinarPromoProps) => {
    const time = useGetDurationVideo(link);
    return (
        <div className="promo_webinar__wrapper">
            <div className="promo_webinar__info">
                <h1 className="header__h1 roboto-bold">{name}</h1>
                <div className="promo_webinar__author roboto-bold">
                    {author}
                </div>
                <div className="promo_webinar__descr roboto-regular">
                    {descr[0]}
                </div>
                {/* <Form id="webinar-form" text="Get the webinar" /> */}
            </div>
            <div className="promo_webinar__macbook">
                <Image
                    src="https://github.com/SergeySKA10/mortgage/blob/assets/src/assets/img/webinar_page/promo/top-macbook.png?raw=true"
                    alt="macbook"
                    width={648}
                    height={431}
                />
                <div className="promo_webinar__macbook-play">
                    <ButtonPlay link={link} text={''} />
                    <div className="promo_webinar__time roboto-regular">{`Play demo: ${time}`}</div>
                </div>
            </div>
        </div>
    );
};
