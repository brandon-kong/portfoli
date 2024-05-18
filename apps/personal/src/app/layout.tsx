import './globals.css';
import '@repo/ui/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@repo/ui/providers';
import { Sidebar, Footer, Navbar } from '@repo/ui/navigation';
import { TooltipProvider } from '@repo/ui/tooltip';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Turborepo',
    description: 'Generated by create turbo',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider>
                    <div className={'flex min-h-screen relative'}>
                        <Sidebar />
                        <Navbar />

                        <main
                            className={
                                'flex-1 py-4 pt-navbar pr-4 pl-4 sidebar-shown:pl-0 sidebar-shown:pt-4 rounded-lg min-h-screen overflow-y-hidden'
                            }
                        >
                            <div
                                className={
                                    'bg-background-nav w-full rounded-lg h-full py-20'
                                }
                            >
                                <div
                                    id="content"
                                    className={
                                        'mx-auto w-full max-w-4xl p-4 px-8'
                                    }
                                >
                                    {children}
                                    <Footer />
                                </div>
                            </div>
                        </main>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
