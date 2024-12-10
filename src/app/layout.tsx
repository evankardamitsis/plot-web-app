import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { AppProvider } from "./contexts/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plot - Virtual Garden Management",
  description: "Manage your virtual plot and track growth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <Header />
              <main className="flex-1 p-8 overflow-auto">
                <div className="glass-effect p-8 min-h-[calc(100vh-8rem)]">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
