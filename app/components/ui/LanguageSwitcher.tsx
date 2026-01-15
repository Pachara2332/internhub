'use client';

import React from 'react';
import { Globe } from 'lucide-react';

type Locale = 'th' | 'en';

export const LanguageSwitcher = () => {
    const [currentLocale, setCurrentLocale] = React.useState<Locale>('th');

    React.useEffect(() => {
        const match = document.cookie.match(/locale=([^;]+)/);
        if (match) {
            setCurrentLocale(match[1] as Locale);
        }
    }, []);

    const switchLanguage = () => {
        const newLocale: Locale = currentLocale === 'th' ? 'en' : 'th';
        document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
        setCurrentLocale(newLocale);
        window.location.reload();
    };

    return (
        <button
            onClick={switchLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/20 
                     hover:bg-white/30 transition-all text-white"
            title="Switch Language"
        >
            <Globe size={16} />
            <span className="text-sm font-medium">
                {currentLocale === 'th' ? 'TH' : 'EN'}
            </span>
        </button>
    );
};
