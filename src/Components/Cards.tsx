import styles from '../styles/modules/Cards.module.scss';

import { useFinance } from '../Contexts/FinanceContext';

export default function Cards() {
    const { cardsValue } = useFinance();

    return (
        <div className={styles.cardsContainer}>
            <article>
                <div>
                    <span>Incomes</span>
                    <img src='/icons/income.svg' alt='Incomes' />
                </div>

                <span> R$ {cardsValue.income} </span>
            </article>

            <article>
                <div>
                    <span>Expenses</span>
                    <img src='/icons/expense.svg' alt='Expenses' />
                </div>

                <span> R$ {cardsValue.expense} </span>
            </article>

            <article>
                <div>
                    <span>Total</span>
                    <img src='/icons/total.svg' alt='Total' />
                </div>

                <span> R$ {cardsValue.total} </span>
            </article>
        </div>
    );
}
