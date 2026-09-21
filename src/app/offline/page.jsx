'use client';

import {useEffect, useState} from 'react';

export default function OfflinePage() {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        const storedSeries = sessionStorage.getItem('series');
        setSeries(storedSeries ? JSON.parse(storedSeries) : []);
    }, []);

    return (
        <main>
            <h2>GET - Offline</h2>
            <p>SessionStorage e nunca chama(fetch/axios) a API.</p>
            <ul>
                {series.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </main>
    )
}
