export default function formatMoney(money = 0): string {
    return money.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
