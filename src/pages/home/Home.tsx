import Header from "../../components/Header/Header";
import  Card  from "../../components/card/Card";
import styles from "./home.module.css"

export function Home(){
  return(
    <div>
      <Header />
      <div className={styles.container}>
      <div  className={styles.cards}>
        <div className={styles.row1}>
          <div className={styles.eventsToday}>
            <Card title="Eventos hoje" amount={0} />
          </div>
          <div className={styles.eventsMonth}>
            <Card title="Eventos nesse Mês" amount={0}/>
          </div>
          <div className={styles.totalEvents}>
            <Card title="Eventos Total" amount={0}/>
          </div>
        </div>
        <div className={styles.row2}>
          <div className={styles.canceledEvents}>
            <Card title="Eventos Cancelados" amount={0} />
          </div>
          <div className={styles.rescheduledEvents}>
          <Card title="Eventos Remarcados" amount={0} />
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}