import Header from '../Components/Header';
import Cards from '../Components/Cards';
import Table from '../Components/Table';
import Footer from '../Components/Footer';
import NewFinanceModal from '@Components/NewFinanceModal';
import EditingFinanceModal from '@Components/EditingFinanceModal';

import { ModalContextProvider } from '../Contexts/ModalContext';
import { FinanceContextProvider } from '../Contexts/FinanceContext';

export default function Home() {
    return (
        <ModalContextProvider>
            <FinanceContextProvider>
                <Header />

                <div className="container">
                    <Cards />
                    <Table />
                    <Footer />
                </div>

                <NewFinanceModal />
                <EditingFinanceModal />
            </FinanceContextProvider>
        </ModalContextProvider>
    );
}
