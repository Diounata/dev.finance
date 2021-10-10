import Image from 'next/image';
import styles from '@styles/Header.module.scss';

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <Image src="/logo.svg" width={172} height={24} alt="dev.finance" title="dev.finance" />
        </header>
    );
}
