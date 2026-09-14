'use client';

import { Atom } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { crud, examples } from '@/data/crud';
import styles from './Header.module.css';

export default function Header() {
    const pathname = usePathname();

    const operation =
        crud.find((c) => pathname === `/${c.method.toLowerCase()}`) ||
        examples.find((e) => pathname === `/${e.method.toLowerCase()}`);

    const method = pathname === '/' ? 'CRUD' : operation?.method || '404';
    const color = pathname === '/' ? 'black' : operation?.color || 'red';

    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <Link href="/" className={styles.atom}>
                    <Atom size={50} />
                </Link>
                <div>
                    <h2>NextJS16 App Router</h2>
                    <p>
                        API Codeverse sobre <span>SÉRIES</span> - URL:{' '}
                        <a href={process.env.NEXT_PUBLIC_API_URL} className={styles.verb}>
                            {process.env.NEXT_PUBLIC_API_URL}
                        </a>
                    </p>
                </div>
            </div>
            <h1 style={{ color }}>{method.toUpperCase()}</h1>
        </header>
    );
}