import styles from '../styles/modules/Cards.module.scss';

export default function Cards() {
    return (
        <div className={styles.cardsContainer}>
            <article>
                <div>
                    <span>Incomes</span>
                    <img src='/icons/income.svg' alt='Incomes' />
                </div>

                <span> $ 2.500,00 </span>
            </article>

            <article>
                <div>
                    <span>Expenses</span>
                    <img src='/icons/expense.svg' alt='Expenses' />
                </div>

                <span> $ 800,00 </span>
            </article>

            <article>
                <div>
                    <span>Total</span>
                    <img src='/icons/total.svg' alt='Total' />
                </div>

                <span> $ 1.700,00 </span>
            </article>
        </div>
    );
}
