import styles from '../styles/modules/Table.module.scss';

interface sla {
    description: string;
    value: number;
    date: string;
}

export default function Table() {
    const sla = [
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

    return (
        <table className={styles.tableContainer}>
            <thead>
                <th>Description</th>
                <th>Value</th>
                <th>Date</th>
            </thead>

            <tbody>
                {sla.map((i: sla, index) => (
                    <tr key={index}>
                        <td>{i.description}</td>

                        <td className={i.value < 0 ? styles.red : styles.green}>
                            {i.value < 0
                                ? `-R$ ${i.value * -1}`
                                : `R$ ${i.value}`}
                        </td>

                        <td>{i.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
