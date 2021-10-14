import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '@styles/NotFound.module.scss';

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => router.push('/'), 5000);
    }, []);

    return (
        <div className={styles.container}>
            <div>
                <h3>-R$ 404</h3>

                <div>This page doesn't exist</div>
            </div>

            <div>Returning...</div>
        </div>
    );
}
