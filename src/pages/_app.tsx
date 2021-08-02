import '../styles/main.scss';

import { ModalContextProvider } from '../Contexts/ModalContext';
import { FinanceContextProvider } from '../Contexts/FinanceContext';

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
