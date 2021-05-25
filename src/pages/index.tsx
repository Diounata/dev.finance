import Header from '../Components/Header';
import Cards from '../Components/Cards';
import Table from '../Components/Table';
import Footer from '../Components/Footer';
import Modal from '../Components/Modal';

import { ModalContextProvider } from '../Contexts/ModalContext';

export default function Home() {
    return (
        <ModalContextProvider>
            <Header />

            <div className='container'>
                <Cards />
                <Table />
                <Footer />
            </div>

            <Modal />
        </ModalContextProvider>
    );
}
