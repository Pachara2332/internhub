'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Home, AlertCircle } from 'lucide-react';

export default function NotFound() {
    const t = useTranslations('error');
    const tCommon = useTranslations('common');

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center px-6"
            style={{
                background: 'linear-gradient(135deg, #fff5f5 0%, #ffffff 50%, #fff0f0 100%)'
            }}
        >
            <div className="text-center">
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                    <AlertCircle size={48} className="text-red-500" />
                </div>

                <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-4">
                    {t('notFoundTitle')}
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 mb-8">
                    {t('notFoundMessage')}
                </p>

                <Link href="/">
                    <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full
                                     hover:from-red-600 hover:to-red-700 transition-all duration-200
                                     shadow-lg shadow-red-200 hover:shadow-xl hover:shadow-red-300
                                     hover:scale-105 active:scale-100">
                        <Home size={20} />
                        {t('backHome')}
                    </button>
                </Link>
            </div>

            <footer className="absolute bottom-6 text-center text-gray-400 text-sm">
                {tCommon('footer')}
            </footer>
        </div>
    );
}
