//css
import ButtonHeader from '../ButtonHeader/ButtonHeader'
import InputSearch from '../InputSearch/InputSearch'
import styles from './header.module.css'

export default function Header(){
  return(
    <header className={styles.container}>
      <div>
          <h1 className={styles.logo}>DASHBOARD</h1>
      </div>
      <div className={styles.buttonNew}>
        <InputSearch />
        <ButtonHeader/>
      </div>
    </header>
  )
}