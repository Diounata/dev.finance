import Image from 'next/image';

import { useFinance } from '../../Contexts/FinanceContext';

interface FinanceProps {
    description: string;
    value: number;
    date: {
        domString: string;
        formatted: string;
    };
}

export default function TableBody({ styles }) {
    const { finance, updateEditingFinance, deleteFinance } = useFinance();

    return (
        <>
            {finance.map((item: FinanceProps, key: number) => (
                <tr key={key}>
                    <td>
                        <span>{item.description}</span>
                    </td>

                    <td className={item.value < 0 ? styles.red : styles.green}>
                        {item.value < 0 ? `-R$ ${item.value * -1}` : `R$ ${item.value}`}
                    </td>

                    <td>{item.date.formatted}</td>

                    <td>
                        <div>
                            <button onClick={() => updateEditingFinance(key)}>
                                <Image src="/pencil.svg" width={22} height={22} title="Edit" alt="Edit" />
                            </button>
                        </div>

                        <div>
                            <button onClick={() => deleteFinance(key)}>
                                <Image src="/minus.svg" width={22} height={22} title="Delete" alt="Delete" />
                            </button>
                        </div>
                    </td>
                </tr>
            ))}
        </>
    );
}
