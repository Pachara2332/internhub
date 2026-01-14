import React from 'react';

interface ErrorMessageProps {
    message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
    if (!message) return null;

    return (
        <p
            className="text-sm mt-1"
            style={{ color: '#EB5757' }}
        >
            {message}
        </p>
    );
};
