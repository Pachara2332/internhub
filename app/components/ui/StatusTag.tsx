import React from 'react';

interface StatusTagProps {
    status: string;
}

export const StatusTag = ({ status }: StatusTagProps) => {
    return (
        <span
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
            style={{
                backgroundColor: '#6FCF97',
                color: '#FFFFFF'
            }}
        >
            {status}
        </span>
    );
};
