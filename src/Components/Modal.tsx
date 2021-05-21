import styles from '../styles/modules/Modal.module.scss';

import { useModal } from '../Contexts/ModalContext';

export default function Modal() {
    const { isModalOpen, changeModalState } = useModal();

    return (
        <div className={isModalOpen ? styles.modalContainer : styles.closed}>
            <div>
                <h2>New transation</h2>

                <div>
                    <input type='text' placeholder='Description' />

                    <input type='number' id='moneyInput' placeholder='0,00' />
                    <label htmlFor='moneyInput'>
                        Use - (line) for expenses and , (comma) for decimal place.
                    </label>

                    <input type='date' />
                </div>

                <div>
                    <button onClick={() => changeModalState(false)}>
                        Cancel
                    </button>

                    <button onClick={() => changeModalState(false)}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
