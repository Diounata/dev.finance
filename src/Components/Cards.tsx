import styles from '@styles/Cards.module.scss';

import { useFinance } from '@Contexts/FinanceContext';

export default function Cards() {
    const { cardsValue } = useFinance();

    return (
        <div className={styles.cardsContainer}>
            <div>
                <div>
                    <span>Incomes</span>
                    <img src='/icons/income.svg' alt='Incomes' />
                </div>

                <span> R$ 1 </span>
            </div>

            <div>
                <div>
                    <span>Expenses</span>
                    <img src='/icons/expense.svg' alt='Expenses' />
                </div>

                <span> R$ 1 </span>
            </div>

            <div>
                <div>
                    <span>Total</span>
                    <img src='/icons/total.svg' alt='Total' />
                </div>

                <span>R$ 0</span>
            </div>
        </div>
    );
}
