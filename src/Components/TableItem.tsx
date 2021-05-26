import { useFinance } from '../Contexts/FinanceContext';

interface finance {
    description: string;
    value: number;
    date: string;
}

export default function TableItem({ styles }) {
    const { finance, deleteFinance } = useFinance();

    return (
        <>
            {finance.map((i: finance, index) => (
                <tr key={index}>
                    <td>
                        <span>{i.description}</span>
                    </td>

                    <td className={i.value < 0 ? styles.red : styles.green}>
                        {i.value < 0 ? `-R$ ${i.value * -1}` : `R$ ${i.value}`}
                    </td>

                    <td>{i.date}</td>

                    <td>
                        <div>
                            <button>
                                <img
                                    src='/icons/pencil.svg'
                                    title='Edit'
                                    alt='Edit'
                                />
                            </button>
                        </div>

                        <div>
                            <button onClick={() => deleteFinance(index)}>
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
        </>
    );
}
