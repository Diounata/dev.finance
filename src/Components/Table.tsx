import styles from '../styles/modules/Table.module.scss';

import { useModal } from '../Contexts/ModalContext';

interface finance {
    description: string;
    value: number;
    date: string;
}

export default function Table() {
    const finance = [
        {
            description: 'Website development',
            value: 3500,
            date: '01/01/2022',
        },

        {
            description: 'Apartment renting',
            value: -1000,
            date: '01/01/2022',
        },

        {
            description: 'Computer',
            value: -400,
            date: '01/01/2022',
        },
    ];

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
                            <td>{i.description}</td>

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
                                <button>
                                    <img src='/icons/minus.svg' alt='Delete' />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
