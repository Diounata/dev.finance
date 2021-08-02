import { useRef } from 'react';

import styles from '@styles/modules/Modal.module.scss';

import { useModal } from '@Contexts/ModalContext';
import { useFinance } from '@Contexts/FinanceContext';

interface FinanceProps {
    description: string;
    value: number;
    date: string;
}

export default function Modal() {
    const { isEditFinanceModalOpen, selectedFinance, closeEditFinance } = useModal();
    const { editFinance } = useFinance();

    const descriptionRef = useRef(null);
    const valueRef = useRef(null);
    const dateRef = useRef(null);

    function edit() {
        const newFinance: FinanceProps = {
            description: descriptionRef.current,
            value: Number(valueRef.current),
            date: dateRef.current.split('-').reverse().join('/'),
        };

        if (
            newFinance.description === '' ||
            newFinance.value === 0 ||
            newFinance.date === ''
        ) {
            alert('The form field is not filled correctly.');
        } else {
            editFinance(newFinance);
            closeEditFinance();
        }
    }

    return (
        <div
            className={
                isEditFinanceModalOpen ? styles.modalContainer : styles.closed
            }
        >
            <div>
                <h2>Edit transation</h2>

                <div>
                    <input
                        type='text'
                        placeholder='Description'
                        ref={descriptionRef} value={selectedFinance.description}
                    />

                    <input
                        type='number'
                        id='moneyInput'
                        placeholder='0,00'
                        ref={valueRef} value={selectedFinance.value}
                    />
                    <label htmlFor='moneyInput'>
                        Use - (line) for expenses and , (comma) for decimal
                        place.
                    </label>

                    <input type='date' ref={dateRef} value={selectedFinance.date} />
                </div>

                <div>
                    <button onClick={() => closeEditFinance()}>Cancel</button>

                    <button onClick={edit}>Edit</button>
                </div>
            </div>
        </div>
    );
}
