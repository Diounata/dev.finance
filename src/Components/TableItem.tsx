import Image from 'next/image';

export default function TableItem({ styles }) {
    return (
        <>
            <tr>
                <td>
                    <span>Apartment rent</span>
                </td>

                <td className={styles.red}> -$ 1.800 </td>

                <td>21/07/2021</td>

                <td>
                    <button>
                        <Image width={18} height={18} src='/icons/pencil.svg' title='Edit' alt='Edit' />
                    </button>

                    <button>
                        <Image width={18} height={18} src='/icons/minus.svg' title='Delete' alt='Delete' />
                    </button>
                </td>
            </tr>
        </>
    );
}

/* 
{finance &&
                finance.map((i: finance, index) => (
                    <tr key={index}>
                        <td>
                            <span>{i.description}</span>
                        </td>

                        <td className={i.value < 0 ? styles.red : styles.green}>{i.value < 0 ? `-R$ ${i.value * -1}` : `R$ ${i.value}`}</td>

                        <td>{i.date}</td>

                        <td>
                            <div>
                                <button>
                                    <img src='/icons/pencil.svg' title='Edit' alt='Edit' />
                                </button>
                            </div>

                            <div>
                                <button onClick={() => deleteFinance(index)}>
                                    <img src='/icons/minus.svg' title='Delete' alt='Delete' />
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
*/
