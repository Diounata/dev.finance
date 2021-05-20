import styles from '../styles/modules/Cards.module.scss';

export default function Cards() {
    return (
        <div className={styles.cardsContainer}>
            <article>
                <div>
                    <span>Incomes</span>
                    <img src='/icons/income.svg' alt='Incomes' />
                </div>

                <span> R$ 3.500,00 </span>
            </article>

            <article>
                <div>
                    <span>Expenses</span>
                    <img src='/icons/expense.svg' alt='Expenses' />
                </div>

                <span> R$ 1.400,00 </span>
            </article>

            <article>
                <div>
                    <span>Total</span>
                    <img src='/icons/total.svg' alt='Total' />
                </div>

                <span> R$ 2.100,00 </span>
            </article>
        </div>
    );
}
