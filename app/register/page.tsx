"use client"; // เพิ่มเพื่อให้รองรับการทำงานของฝั่ง Client ใน Next.js

import React from 'react';
import { 
  User, Mail, Phone, School, BookOpen, 
  MapPin, GraduationCap, Briefcase, Info, 
  ArrowRight, ShieldCheck, Lock
} from 'lucide-react';
import { Header } from '../components/ui/Header';
import { Button } from '../components/ui/Button';

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
            <Header />

            <main className="flex-grow flex items-center justify-center px-6 py-12">
                {/* ใช้ div ธรรมดาแทน Card และกำหนด max-w-6xl เพื่อความกว้างสูงสุด */}
                <div className="w-full max-w-6xl bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/5 overflow-hidden flex flex-col md:flex-row min-h-[800px]">
                    
                    {/* ฝั่งซ้าย: Branding & Welcome */}
                    <div className="w-full md:w-[35%] bg-gradient-to-br from-blue-600 to-indigo-700 p-12 text-white flex flex-col justify-between">
                        <div>
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center mb-8">
                                <GraduationCap size={32} />
                            </div>
                            <h2 className="text-4xl font-black leading-tight">
                                Start Your <br /> Journey Today.
                            </h2>
                            <p className="mt-6 text-blue-100 leading-relaxed font-medium">
                                สร้างโปรไฟล์ของคุณเพื่อเชื่อมต่อกับบริษัทชั้นนำและโอกาสฝึกงานที่น่าสนใจ
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                                <ShieldCheck className="text-blue-200" size={20} />
                                <span className="text-sm font-semibold">Verified Talent Profile</span>
                            </div>
                            <p className="text-xs text-blue-200/50">© 2026 InternHub Platform</p>
                        </div>
                    </div>

                    {/* ฝั่งขวา: Registration Form */}
                    <div className="w-full md:w-[65%] p-8 md:p-16 bg-white">
                        <div className="mb-10">
                            <h3 className="text-3xl font-black text-gray-900">Create Account</h3>
                            <p className="text-gray-400 mt-2 font-medium">กรุณากรอกข้อมูลเพื่อสร้างโปรไฟล์นักศึกษาของคุณ</p>
                        </div>

                        <form className="space-y-10">
                            
                            {/* ส่วนที่ 1: ข้อมูลบัญชีและข้อมูลส่วนตัว (Profile Model) */}
                            <div>
                                <h4 className="flex items-center gap-2 text-sm font-black text-blue-600 uppercase tracking-widest mb-6">
                                    <User size={16} /> Personal Account
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase ml-1">Display Name</label>
                                        <div className="relative group">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                                            <input type="text" placeholder="ชื่อที่ใช้แสดง" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-50 focus:bg-white focus:border-blue-500 transition-all outline-none text-gray-900 placeholder:text-gray-400" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase ml-1">Phone Number</label>
                                        <div className="relative group">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                                            <input type="tel" placeholder="08x-xxx-xxxx" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-50 focus:bg-white focus:border-blue-500 transition-all outline-none text-gray-900 placeholder:text-gray-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ส่วนที่ 2: ข้อมูลการศึกษา (Prisma: university, faculty, major, yearLevel) */}
                            <div>
                                <h4 className="flex items-center gap-2 text-sm font-black text-blue-600 uppercase tracking-widest mb-6">
                                    <School size={16} /> Education Details
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase ml-1">University</label>
                                        <div className="relative group">
                                            <School className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                                            <input type="text" placeholder="ชื่อมหาวิทยาลัยของคุณ" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-50 focus:bg-white focus:border-blue-500 transition-all outline-none text-gray-900 placeholder:text-gray-400" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase ml-1">Faculty</label>
                                        <div className="relative group">
                                            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                                            <input type="text" placeholder="เช่น คณะวิศวกรรมศาสตร์" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-50 focus:bg-white focus:border-blue-500 transition-all outline-none text-gray-900 placeholder:text-gray-400" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase ml-1">Major</label>
                                        <div className="relative group">
                                            <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                                            <input type="text" placeholder="เช่น สาขาวิทยาการคอมพิวเตอร์" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-50 focus:bg-white focus:border-blue-500 transition-all outline-none text-gray-900 placeholder:text-gray-400" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase ml-1">Year Level</label>
                                        <div className="relative group">
                                            <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                                            <input type="number" placeholder="ชั้นปีที่ (เช่น 3)" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-50 focus:bg-white focus:border-blue-500 transition-all outline-none text-gray-900 placeholder:text-gray-400" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase ml-1">Location</label>
                                        <div className="relative group">
                                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                                            <input type="text" placeholder="จังหวัด หรือ ย่านที่พักอาศัย" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-50 focus:bg-white focus:border-blue-500 transition-all outline-none text-gray-900 placeholder:text-gray-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ส่วนที่ 3: Bio (แก้ไข Error rows={3}) */}
                            <div className="space-y-2">
                                <h4 className="flex items-center gap-2 text-sm font-black text-blue-600 uppercase tracking-widest mb-4">
                                    <Info size={16} /> About You (Bio)
                                </h4>
                                <div className="relative group">
                                    <textarea 
                                        rows={3}  /* แก้ไขจาก "3" เป็น {3} */
                                        placeholder="เขียนแนะนำตัวเองสั้นๆ เพื่อดึงดูดใจผู้ว่าจ้าง..."
                                        className="w-full p-5 bg-gray-50 border border-gray-100 rounded-3xl focus:ring-4 focus:ring-blue-50 focus:bg-white focus:border-blue-500 transition-all outline-none resize-none text-gray-900 placeholder:text-gray-400 shadow-sm font-medium"
                                    ></textarea>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-6">
                                <p className="text-sm text-gray-500 font-medium">
                                    มีบัญชีอยู่แล้ว? <a href="/login" className="text-blue-600 font-bold hover:underline">เข้าสู่ระบบ</a>
                                </p>
                                <Button type="submit" className="w-full sm:w-auto px-12 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-xl shadow-blue-200 flex items-center justify-center gap-2 transition-all active:scale-95">
                                    Create Profile
                                    <ArrowRight size={20} />
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            <footer className="py-8 text-center text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">
                © 2026 InternHub • Building Your Future
            </footer>
        </div>
    );
}