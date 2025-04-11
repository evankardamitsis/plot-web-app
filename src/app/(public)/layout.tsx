import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppProvider } from "../contexts/AppContext";
import { NotificationProvider } from "../contexts/NotificationContext";
import { Toaster } from 'react-hot-toast'
import "../globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Plot - Your Personal Garden Assistant",
    description: "Track, manage, and grow your garden with Plot",
};

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AppProvider>
                    <NotificationProvider>
                        {children}
                    </NotificationProvider>
                </AppProvider>
                <Toaster />
            </body>
        </html>
    );
} 