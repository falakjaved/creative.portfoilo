import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Falak Javed - Portfolio",
  description: "Creative & Modern Portfolio Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col min-h-screen bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100">
        {/* Navbar */}
        <nav className="w-full border-b bg-white/70 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
            {/* Left Corner Profile Pic */}
            <div className="flex items-center gap-3">
              <Image
                src="/profile.jpg"
                alt="Falak Javed"
                width={40}
                height={40}
                className="rounded-full border-2 border-purple-500 shadow-sm"
              />
              <h1 className="text-lg font-bold">Falak Javed</h1>
            </div>

            {/* Center Navigation */}
            <div className="flex gap-6 text-sm font-medium">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contact">Contact</Link>
            </div>

            {/* Right Social Links */}
            <div className="flex gap-4 text-gray-600">
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                className="hover:text-purple-700"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                className="hover:text-purple-700"
              >
                GitHub
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                className="hover:text-purple-700"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com/@yourusername"
                target="_blank"
                className="hover:text-purple-700"
              >
                TikTok
              </a>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="flex-1 max-w-6xl mx-auto p-6">{children}</main>

        {/* Footer */}
        <footer className="border-t mt-12 py-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Falak Javed. Built with ❤️ & Next.js
        </footer>
      </body>
    </html>
  );
}
