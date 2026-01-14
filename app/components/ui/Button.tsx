import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export const Button = ({ children, className = '', ...props }: ButtonProps) => {
    return (
        <button
            className={`w-full py-3 px-6 rounded-lg font-semibold transition-transform active:scale-95 ${className}`}
            style={{
                backgroundColor: '#FFD166',
                color: '#2D2D2D'
            }}
            {...props}
        >
            {children}
        </button>
    );
};
