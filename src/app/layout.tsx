import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppProvider } from "./contexts/AppContext";
import { AuthProvider } from "./contexts/AuthContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import AppLayoutWrapper from "./components/AppLayoutWrapper";
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plot - Your Personal Garden Assistant",
  description: "Track, manage, and grow your garden with Plot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Toaster />
          <AppProvider>
            <NotificationProvider>
              <AppLayoutWrapper>{children}</AppLayoutWrapper>
            </NotificationProvider>
          </AppProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
