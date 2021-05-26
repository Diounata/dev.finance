import { useRef } from 'react';
import styles from '../styles/modules/Modal.module.scss';

import { useModal } from '../Contexts/ModalContext';
import { useFinance } from '../Contexts/FinanceContext';

interface FinanceProps {
    description: string;
    value: number;
    date: string;
}

export default function Modal() {
    const { isModalOpen, changeModalState } = useModal();
    const { addFinance } = useFinance();

    const descriptionRef = useRef(null);
    const valueRef = useRef(null);
    const dateRef = useRef(null);

    function add() {
        const newFinance: FinanceProps = {
            description: descriptionRef.current.value,
            value: Number(valueRef.current.value),
            date: dateRef.current.value.split('-').reverse().join('/'),
        };

        if (
            newFinance.description === '' ||
            newFinance.value === 0 ||
            newFinance.date === ''
        ) {
            alert('The form field is not filled correctly.');
        } else {
            descriptionRef.current.value = '';
            valueRef.current.value = '';
            dateRef.current.value = '';

            addFinance(newFinance);
            changeModalState(false);
        }
    }

    return (
        <div className={isModalOpen ? styles.modalContainer : styles.closed}>
            <div>
                <h2>New transation</h2>

                <div>
                    <input
                        type='text'
                        placeholder='Description'
                        ref={descriptionRef}
                    />

                    <input
                        type='number'
                        id='moneyInput'
                        placeholder='0,00'
                        ref={valueRef}
                    />
                    <label htmlFor='moneyInput'>
                        Use - (line) for expenses and , (comma) for decimal
                        place.
                    </label>

                    <input type='date' ref={dateRef} />
                </div>

                <div>
                    <button onClick={() => changeModalState(false)}>
                        Cancel
                    </button>

                    <button onClick={add}>Save</button>
                </div>
            </div>
        </div>
    );
}
