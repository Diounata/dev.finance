import styles from '../styles/modules/Table.module.scss';

import TableItem from './TableItem';
import NoFinance from './NoFinance';

import { useModal } from '../Contexts/ModalContext';
import { useFinance } from '../Contexts/FinanceContext';

export default function Table() {
    const { changeModalState } = useModal();
    const { finance } = useFinance();

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
                    {finance.length > 0 ? (
                        <TableItem styles={styles} />
                    ) : (
                        <NoFinance styles={styles} />
                    )}
                </tbody>
            </table>
        </>
    );
}
