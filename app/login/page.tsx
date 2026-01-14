import React from 'react';
import { Header } from '../components/ui/Header';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ErrorMessage } from '../components/ui/ErrorMessage';

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Header />

            <main className="flex-grow flex items-center justify-center p-4">
                <Card>
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
                        <p className="text-gray-500 mt-2">Please sign in to your account</p>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="name@company.com"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            />
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <a href="#" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                                    Forgot password?
                                </a>
                            </div>
                            <input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            />
                            {/* Example of error message usage */}
                            {/* <ErrorMessage message="Invalid email or password" /> */}
                        </div>

                        <Button type="submit">
                            Sign In
                        </Button>

                        <p className="text-center text-sm text-gray-500 mt-6">
                            Don't have an account?{' '}
                            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                                Sign up
                            </a>
                        </p>
                    </form>
                </Card>
            </main>

            <footer className="py-6 text-center text-gray-400 text-sm">
                © 2024 InternHub. All rights reserved.
            </footer>
        </div>
    );
}
