'use client';

import { useEffect } from 'react';
import ErrorMessage from '@/features/components/ui/ErrorMessage/ErrorMessage';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Optionally log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="container">
            <ErrorMessage
                message={`Error: ${error.name}, message: ${error.message}`}
                reset={reset}
            />
        </div>
    );
}
