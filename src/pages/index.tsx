import Header from '../Components/Header';
import Cards from '../Components/Cards';
import Table from '../Components/Table';

export default function Home() {
    return (
        <div>
            <Header />

            <div className='container'>
                <Cards />
                <Table />
            </div>
        </div>
    );
}
