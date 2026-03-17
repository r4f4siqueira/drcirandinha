import type { Metadata } from 'next';
import { Provider } from '@/components/ui/provider';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    variable: '--font-roboto',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Dr Cirandinha',
    description: 'Site do Streamer Dr Cirandinha, feito para facilitar a interação com a comunidade.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={roboto.variable}
        >
            <body>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
