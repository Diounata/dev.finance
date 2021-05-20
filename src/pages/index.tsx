import Header from '../Components/Header';
import Cards from '../Components/Cards';

export default function Home() {
    return (
        <div>
            <Header />

            <div className='container'>
                <Cards />
            </div>
        </div>
    );
}
