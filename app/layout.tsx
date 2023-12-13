import './globals.css';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import Link from 'next/link';

const quicksand = Quicksand({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Reading Log',
  description: 'Keep track of your reads',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        {children}
        <div>
          <header>
            <nav className="fixed w-full h-20 shadow-xl">
              <div>
                <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                  <ul> Logo </ul>
                  <ul className="flex px-5 py-5 2xl:px-16">
                    <li className="pr-5">
                      <Link href="/library">Library</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                  </ul>
                </div>
                <div></div>
              </div>
            </nav>
          </header>
        </div>
      </body>
    </html>
  );
}
