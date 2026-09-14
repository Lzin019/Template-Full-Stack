import Link from 'next/link';
import styles from './Card.module.css';

export default function Card({ verb, method, description, color, Icon, style }) {
    return (
        <Link
            href={`/${method.toLowerCase()}`}
            className={styles.card}
            style={{ ...style, '--card-color': color }}>
            <div className={styles.cardHeader}>
                <Icon color={color} size={32} />
                <h2>
                    {verb} - {method}
                </h2>
            </div>
            <p>{description}</p>
        </Link>
    );
}