import React from 'react';
import { Mail, Lock, Eye } from 'lucide-react';
import { Header } from '../components/ui/Header';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex flex-col font-sans">
            <Header />

            <main className="flex-grow flex items-center justify-center px-4">
                <Card className="relative w-full max-w-md p-8 bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40">

                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-200/30 to-indigo-200/30 blur-2xl -z-10" />

                    <div className="mb-8 text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                            Welcome Back
                        </h2>
                        <p className="text-gray-500 mt-2 text-sm">
                            Sign in to continue to <span className="font-semibold text-gray-700">InternHub</span>
                        </p>
                    </div>

                    <form className="space-y-6">
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">
                                Email Address
                            </label>
                            <div className="relative group">
                                <Mail
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition"
                                />
                                <input
                                    type="email"
                                    placeholder="name@company.com"
                                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900
                                    placeholder:text-gray-400 shadow-sm
                                    focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500
                                    transition-all"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex items-center justify-between mb-1 ml-1">
                                <label className="text-sm font-semibold text-gray-700">
                                    Password
                                </label>
                                <a
                                    href="#"
                                    className="text-xs font-bold text-blue-600 hover:text-blue-700"
                                >
                                    Forgot password?
                                </a>
                            </div>

                            <div className="relative group">
                                <Lock
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition"
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full pl-11 pr-12 py-3 rounded-xl bg-white border border-gray-200 text-gray-900
                                    placeholder:text-gray-400 shadow-sm
                                    focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500
                                    transition-all"
                                />
                                <Eye
                                    size={18}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300"
                                />
                            </div>
                        </div>

                        {/* Button */}
                        <Button
                            type="submit"
                            className="w-full py-3 rounded-xl font-bold text-white
                            bg-gradient-to-r from-blue-600 to-indigo-600
                            hover:from-blue-700 hover:to-indigo-700
                            shadow-lg shadow-blue-200
                            hover:scale-[1.02] active:scale-[0.98]
                            transition-all duration-200"
                        >
                            Sign In
                        </Button>

                        <p className="text-center text-sm text-gray-500 pt-6">
                            Don&apos;t have an account?{' '}
                            <a
                                href="#"
                                className="font-bold text-blue-600 hover:underline"
                            >
                                Sign up
                            </a>
                        </p>
                    </form>
                </Card>
            </main>

            <footer className="py-6 text-center text-gray-400 text-sm">
                © 2026 InternHub. All rights reserved.
            </footer>
        </div>
    );
}