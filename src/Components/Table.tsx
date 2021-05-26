import styles from '../styles/modules/Table.module.scss';

import { useFinance } from '../Contexts/FinanceContext';
import { useModal } from '../Contexts/ModalContext';

interface finance {
    description: string;
    value: number;
    date: string;
}

export default function Table() {
    const { finance, deleteFinance } = useFinance();
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
                    {finance.map((i: finance, index) => (
                        <tr key={index}>
                            <td>
                                <span>{i.description}</span>
                            </td>

                            <td
                                className={
                                    i.value < 0 ? styles.red : styles.green
                                }
                            >
                                {i.value < 0
                                    ? `-R$ ${i.value * -1}`
                                    : `R$ ${i.value}`}
                            </td>

                            <td>{i.date}</td>

                            <td>
                                <div>
                                    <button
                                        onClick={() => deleteFinance(index)}
                                    >
                                        <img
                                            src='/icons/minus.svg'
                                            title='Delete'
                                            alt='Delete'
                                        />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
