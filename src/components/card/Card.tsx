import styles from "./card.module.css"

interface CardProps{
  title: string;
  amount: number;
}

export default function Card({ title, amount }: CardProps){
  return(
    <div className={styles.card}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.amount}>{amount}</p>
    </div>
  )
}