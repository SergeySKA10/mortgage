import { QueryData } from '@/shared/shared-components/dataTypesFromSQL';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import Image from 'next/image';
import { redirect } from 'next/navigation';
interface ErrorProps {
    message?: string | undefined;
    path?: string;
    refetch?: (
        options?: RefetchOptions
    ) => Promise<QueryObserverResult<QueryData, Error>>;
    reset?: () => void;
}

const ErrorMessage = ({ message, path, refetch, reset }: ErrorProps) => {
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
            {path ? (
                <button
                    tabIndex={0}
                    className="btn btn__mini"
                    style={{ marginTop: '20px' }}
                    onClick={() => redirect(`${path}`)}
                >
                    Try again
                </button>
            ) : null}
            {refetch ? (
                <button
                    tabIndex={0}
                    className="btn btn__mini"
                    style={{ marginTop: '20px' }}
                    onClick={() => refetch()}
                >
                    Try again
                </button>
            ) : null}
            {reset ? (
                <button
                    tabIndex={0}
                    className="btn btn__mini"
                    style={{ marginTop: '20px' }}
                    onClick={() => reset()}
                >
                    Try again
                </button>
            ) : null}
        </div>
    );
};

export default ErrorMessage;
