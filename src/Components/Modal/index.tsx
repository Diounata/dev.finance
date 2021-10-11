import styles from '@styles/Modal.module.scss';

import NewFinanceModal from './NewFinanceModal';
import EditingFinanceModal from './EditingFinanceModal';

import { useModal } from '@Contexts/ModalContext';

export default function Modal() {
    const { isModalOpen, selectedModal } = useModal();

    const modal = {
        add: <NewFinanceModal />,
        edit: <EditingFinanceModal />,
    };

    return <div className={isModalOpen ? styles.modalContainer : styles.closed}>{modal[selectedModal]}</div>;
}
