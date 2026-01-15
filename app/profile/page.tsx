import React from 'react';
import { User, Mail, Briefcase, MapPin, LogOut, Pencil, ShieldCheck } from 'lucide-react';
import { Header } from '../components/ui/Header';
import { Button } from '../components/ui/Button';

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-[#f1f5f9] flex flex-col font-sans">
            <Header />

            <main className="flex-grow flex items-center justify-center p-4 md:p-10">
                {/* เปลี่ยนจาก Card เป็น div เพื่อคุมความกว้างได้ 100% */}
                <div className="w-full max-w-6xl bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/5 overflow-hidden flex flex-col md:flex-row min-h-[600px]">
                    
                    {/* ฝั่งซ้าย: Profile Sidebar (พื้นหลังสีเข้มกว่าเล็กน้อย) */}
                    <div className="w-full md:w-[35%] bg-gray-50/50 p-8 md:p-12 border-r border-gray-100 flex flex-col items-center">
                        <div className="relative">
                            <div className="w-44 h-44 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-7xl font-bold shadow-xl">
                                A
                            </div>
                            <div className="absolute -bottom-3 -right-3 bg-green-500 border-8 border-white w-10 h-10 rounded-full" />
                        </div>

                        <div className="mt-8 text-center">
                            <h2 className="text-2xl font-black text-gray-900 leading-tight">
                                Akarapon <br /> Choralee
                            </h2>
                            <p className="inline-flex items-center gap-2 mt-3 px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
                                <ShieldCheck size={16} /> Verified Intern
                            </p>
                        </div>

                        <div className="w-full mt-10 grid grid-cols-2 gap-3">
                            <div className="bg-white p-4 rounded-2xl shadow-sm text-center border border-gray-100">
                                <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Projects</p>
                                <p className="text-2xl font-bold text-gray-800">12</p>
                            </div>
                            <div className="bg-white p-4 rounded-2xl shadow-sm text-center border border-gray-100">
                                <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Rating</p>
                                <p className="text-2xl font-bold text-gray-800">4.9</p>
                            </div>
                        </div>

                        <div className="mt-auto w-full pt-10">
                            <Button className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-red-50 text-red-600 hover:bg-red-100 border border-red-100 transition-all font-bold">
                                <LogOut size={18} />
                                Sign Out
                            </Button>
                        </div>
                    </div>

                    {/* ฝั่งขวา: Main Content Area */}
                    <div className="w-full md:w-[65%] p-8 md:p-16 bg-white">
                        <div className="flex items-center justify-between mb-12">
                            <div>
                                <h3 className="text-2xl font-black text-gray-900">Personal Information</h3>
                                <p className="text-gray-400 text-sm mt-1">Manage your account details and preferences</p>
                            </div>
                            <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all font-bold text-sm">
                                <Pencil size={16} />
                                Edit Profile
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                            {[
                                { label: 'Full Name', value: 'Akarapon Choralee', icon: <User size={20} /> },
                                { label: 'Email Address', value: 'akarapon@email.com', icon: <Mail size={20} /> },
                                { label: 'Current Role', value: 'Frontend Developer Intern', icon: <Briefcase size={20} /> },
                                { label: 'Work Location', value: 'Bangkok, Thailand', icon: <MapPin size={20} /> }
                            ].map((field, index) => (
                                <div key={index} className="space-y-2.5">
                                    <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">
                                        {field.label}
                                    </label>
                                    <div className="group relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors">
                                            {field.icon}
                                        </div>
                                        <input
                                            type="text"
                                            value={field.value}
                                            readOnly
                                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-100 text-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white focus:border-blue-500 transition-all"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bio Section */}
                        <div className="mt-12 pt-8 border-t border-gray-50">
                            <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">About Me</label>
                            <div className="mt-4 p-6 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl border border-blue-100/50 text-gray-600 leading-relaxed font-medium">
                                "Experienced intern specialized in React and Tailwind CSS. Looking for opportunities to build impactful digital experiences."
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-8 text-center text-gray-400 text-xs font-medium uppercase tracking-widest">
                © 2026 InternHub • Digital Talent Platform
            </footer>
        </div>
    );
}
