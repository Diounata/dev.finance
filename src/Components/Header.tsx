import Image from 'next/image';
import styles from '@styles/Header.module.scss';

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <Image src='/icons/logo.svg' width={172} height={24} alt='Logo' />
        </header>
    );
}
