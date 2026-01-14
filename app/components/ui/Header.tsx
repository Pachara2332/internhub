import React from 'react';

export const Header = () => {
    return (
        <header className="w-full py-4 px-8 flex items-center justify-between" style={{ backgroundColor: '#4F8EF7' }}>
            <div className="text-white text-xl font-bold tracking-wide">
                InternHub
            </div>
            <nav>
                <ul className="flex gap-6 text-white text-sm font-medium">
                    <li className="cursor-pointer hover:opacity-80 transition-opacity">Home</li>
                    <li className="cursor-pointer hover:opacity-80 transition-opacity">About</li>
                    <li className="cursor-pointer hover:opacity-80 transition-opacity">Contact</li>
                </ul>
            </nav>
        </header>
    );
};
