'use client';

import {Skeleton} from 'antd';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function ReadPage() {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function buscarSeries() {
            try {
                const resp = await axios.get('/api/series?limit=50');
                setSeries(resp.data.data);
                toast.success('Séries carregadas!', {id: 'read' });
            } catch (error) {
                toast.error('Erro ao buscar séries', {id: 'read' });
            } finally {
                setLoading(false);
            }
        }

        buscarSeries();
    }, []);

    return (
        <main>
            <h2>Read</h2>
            <p>Buscando séries via /api/series (nossa API route.js), que fala com a Codeverse direto do servidor.</p>
           
           {loading ? (
                <div className={"skeleton"}>
                <Skeleton active />
                </div>
            ) : (
                <ul>
                    {series.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}
        </main>
    );
}