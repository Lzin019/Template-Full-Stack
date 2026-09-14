import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Header from '@/components/Header';
import { Toaster } from 'react-hot-toast';

export const metadata = {
    title: 'Next.js CRUD',
    description: 'Projeto de CRUD com Next.js 16, React, Ant Design, Toast e Axios.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                <Header />
                <AntdRegistry>{children}</AntdRegistry>
                <Toaster />
            </body>
        </html>
    );
}
