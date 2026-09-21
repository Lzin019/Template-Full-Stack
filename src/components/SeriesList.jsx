'use client';

import { useEffect } from "react";
import toast from "react-hot-toast"

export default function SerieList ({ series }){
    useEffect(() => {
        sessionStorage.setItem('series', JSON.stringify(series));
        toast.success('Series buscada via a SSR a salvas no sessionstorege',{ id: 'ssr'})
    },[series]);

    return (
        <ul>
            {series.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    )
}