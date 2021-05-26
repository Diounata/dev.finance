import styles from '../styles/modules/Table.module.scss';

import TableItem from './TableItem';

import { useModal } from '../Contexts/ModalContext';

export default function Table() {
    const { changeModalState } = useModal();

    return (
        <>
            <div className={styles.addTransationContainer}>
                <button onClick={() => changeModalState(true)}>
                    + New transation
                </button>
            </div>

            <table className={styles.tableContainer}>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Value</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    <TableItem styles={styles} />
                </tbody>
            </table>
        </>
    );
}
