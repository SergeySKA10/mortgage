'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                width: '400px',
                height: '200px',
            }}
        >
            <h2 className="header__h2">Something went wrong!</h2>
            <button
                style={{
                    width: '150px',
                    height: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '5px',
                }}
                onClick={() => reset()}
            >
                Try again
            </button>
        </div>
    );
}
