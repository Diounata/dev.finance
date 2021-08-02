import Title from '../utils/Title';
import Header from '../Components/Header';
import Cards from '../Components/Cards';
import Table from '../Components/Table';
import Footer from '../Components/Footer';
import Modal from '../Components/Modal';

export default function Home() {
    return (
        <>
            <Title>dev.finance</Title>
            <Header />
            <Cards />

            <div className='container'>
                <Table />
            </div>

            <Footer />

            <Modal />
        </>
    );
}
