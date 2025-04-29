import { QueryData } from '@/shared/shared-components/dataTypesFromSQL';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import Image from 'next/image';
interface ErrorProps {
    message?: string | undefined;
    refetch?: (
        options?: RefetchOptions
    ) => Promise<QueryObserverResult<QueryData, Error>>;
}

const ErrorMessage = ({ message, refetch }: ErrorProps) => {
    const [pressBtn, setPressBtn] = useState<boolean>(false);

    useEffect(() => {
        if (pressBtn && refetch) {
            refetch();
            setPressBtn((pressBtn) => !pressBtn);
        }
    }, [pressBtn]);

    return (
        <div
            style={{
                display: 'block',
                margin: '30px auto',
                textAlign: 'center',
            }}
        >
            <Image
                tabIndex={0}
                src={'/error/errorMessage.png'}
                width={50}
                height={50}
                alt="error"
                style={{
                    display: 'block',
                    margin: '0 auto',
                    objectFit: 'contain',
                    width: '50px',
                    height: '50px',
                }}
            />
            <p
                tabIndex={0}
                style={{
                    display: 'block',
                    margin: '0 auto',
                    marginTop: '30px',
                    fontSize: '16px',
                    fontWeight: 400,
                    width: '300px',
                    color: 'red',
                }}
            >
                There was an error loading the data:{' '}
                {message ? message : 'unknown error'} Please try again later.
            </p>
            <button
                tabIndex={0}
                className="btn btn__mini"
                style={{ marginTop: '20px' }}
                onClick={() => setPressBtn((pressBtn) => !pressBtn)}
            >
                Try again
            </button>
        </div>
    );
};

export default ErrorMessage;
