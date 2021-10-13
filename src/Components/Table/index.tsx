import styles from '@styles/Table.module.scss';

import TableBody from './TableBody';

import { useModal } from '@Contexts/ModalContext';

export default function Table() {
    const { selectModal } = useModal();

    return (
        <>
            <div className={styles.addTransationContainer}>
                <button onClick={() => selectModal('add')}>+ New transation </button>
            </div>

            <table className={styles.tableContainer}>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Value</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <TableBody styles={styles} />
                </tbody>
            </table>
        </>
    );
}
