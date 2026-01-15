import React from 'react';
import { XCircle, AlertTriangle, Info } from 'lucide-react';

interface ErrorMessageProps {
    type?: 'error' | 'warning' | 'info';
    title?: string;
    message: string;
    className?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
    type = 'error',
    title,
    message,
    className = ''
}) => {
    const styles = {
        error: {
            bg: 'bg-red-50',
            border: 'border-red-200',
            icon: XCircle,
            iconColor: 'text-red-500',
            titleColor: 'text-red-800',
            textColor: 'text-red-600'
        },
        warning: {
            bg: 'bg-yellow-50',
            border: 'border-yellow-200',
            icon: AlertTriangle,
            iconColor: 'text-yellow-500',
            titleColor: 'text-yellow-800',
            textColor: 'text-yellow-600'
        },
        info: {
            bg: 'bg-blue-50',
            border: 'border-blue-200',
            icon: Info,
            iconColor: 'text-blue-500',
            titleColor: 'text-blue-800',
            textColor: 'text-blue-600'
        }
    };

    const style = styles[type];
    const Icon = style.icon;

    return (
        <div className={`${style.bg} ${style.border} border rounded-xl p-4 flex items-start gap-3 ${className}`}>
            <Icon size={20} className={`${style.iconColor} flex-shrink-0 mt-0.5`} />
            <div>
                {title && (
                    <h4 className={`font-semibold ${style.titleColor} mb-1`}>{title}</h4>
                )}
                <p className={`text-sm ${style.textColor}`}>{message}</p>
            </div>
        </div>
    );
};
