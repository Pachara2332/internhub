import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => {
    return (
        <div
            className={`rounded-xl p-8 w-full max-w-md ${className}`}
            style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0 4px 20px rgba(45, 45, 45, 0.1)'
            }}
        >
            {children}
        </div>
    );
};
