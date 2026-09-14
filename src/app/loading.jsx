import {Spin} from 'antd';

export default function Loading() {
    return (
        <main>
            <Spin size="large" />
            <p>Carregando a página...</p>
        </main>
    )
}