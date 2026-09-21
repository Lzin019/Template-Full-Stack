import { HardDrive, KeyRound, List, Server,} from 'lucide-react';

export const examples = [
    {
        id: 1,
        method: 'ApiKey',
        verb: 'Get',
        description: 'Lista séries com api-key exposta.',
        color: 'purple',
        Icon: KeyRound,
    },
    {
        id: 2,
        method: 'SSR',
        verb: 'Get',
        description: 'Lista séries renderizadas no SSR.',
        color: 'purple',
        Icon: Server,
    },
    {
        id: 3,
        method: 'Offline',
        verb: 'Get',
        description: 'Lista séries consumida no sessionStorage.',
        color: 'purple',
        Icon: HardDrive,
    }
];

export const crud = [
    {
        id: 2,
        method: 'Read',
        verb: 'Get',
        description: 'Lista todas as séries.',
        color: 'green',
        Icon: List,
    },
];