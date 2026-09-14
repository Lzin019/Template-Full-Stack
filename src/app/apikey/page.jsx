'use client';

import {Skeleton} from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function ApiKeyPage() {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function buscarSeries() {
            try {
                const resp = await axios.get(`${process.env.NEXT_PUBLIC_URL_SERIES}?limit=50`, {
                    headers: { 'x-api-key': process.env.NEXT_PUBLIC_API_KEY },
                });
                toast.success('Séries carregadas !', {id: 'getApiKey'});
                setSeries(resp.data.data);
            } catch {
                toast.error('Erro ao buscar séries', {id: 'getApiKey'});
            } finally {
                setLoading(false);
            }
        }
        buscarSeries();
    }, []);

    return (
        <main>
            <h2>Veja api-key ficando exposta no header desta chamada. </h2>
            <p>DevTools - Network - Header - Series</p>
            <p>Axios.get direto na API, com api-key exposta no navegador.</p>
            {loading ? (
                <div ClassName={"skeleton"}>
                <Skeleton />
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