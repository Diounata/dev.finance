import Header from '../Components/Header';
import Cards from '../Components/Cards';
import Table from '../Components/Table';
import Footer from '../Components/Footer';
import Modal from '@Components/Modal';

import { ModalContextProvider } from '../Contexts/ModalContext';
import { FinanceContextProvider } from '../Contexts/FinanceContext';

export default function Home() {
    return (
        <ModalContextProvider>
            <FinanceContextProvider>
                <Header />
                <Cards />

                <div className="container">
                    <Table />
                    <Footer />
                </div>

                <Modal />
            </FinanceContextProvider>
        </ModalContextProvider>
    );
}
