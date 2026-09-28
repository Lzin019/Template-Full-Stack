import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(req) {
    const { searchParams } = new URL(req.url);

    try {
        const resp = await axios.get(process.env.API_URL_SERIES, {
            params: Object.fromEntries(searchParams),
            headers: { 'x-api-key': process.env.API_KEY },
        });
        return NextResponse.json(resp.data);
    } catch (error) {
        const status = error.response?.status || 500;
        const data = error.response?.data || { message: 'Erro ao buscar as séries.'};
        
        return NextResponse.json(data, { status });
    }
}

export async function POST(req) {
    const body = await req.json();

    try {
        const response = await axios.post(process.env.API_URL_SERIES, body, {
            headers: { 'x-api-key': process.env.API_KEY},
        });

        return NextResponse.json(response.data);
    } catch (error) {
        const status = 500;
        const data = {error: 'Erro ao criar série.'};

        return NextResponse.json(data, {status});
        
    }
}