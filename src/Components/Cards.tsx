import Image from 'next/image';
import styles from '@styles/Cards.module.scss';

import formatMoney from '@utils/formatMoney';

import { useFinance } from '@Contexts/FinanceContext';

export default function Cards() {
    const { financeCard } = useFinance();

    return (
        <div className={styles.cardsContainer} id="cards-container">
            <article>
                <div>
                    <span>Incomes</span>

                    <Image src="/income.svg" width={32} height={32} alt="Incomes" title="Incomes" />
                </div>

                <span> {formatMoney(financeCard.income)} </span>
            </article>

            <article>
                <div>
                    <span>Expenses</span>

                    <Image src="/expense.svg" width={32} height={32} alt="Expenses" title="Expenses" />
                </div>

                <span> {formatMoney(financeCard.expense * -1)} </span>
            </article>

            <article>
                <div>
                    <span>Total</span>

                    <Image src="/total.svg" width={32} height={32} alt="Total" title="Total" />
                </div>

                <span> {formatMoney(financeCard.total)} </span>
            </article>
        </div>
    );
}
