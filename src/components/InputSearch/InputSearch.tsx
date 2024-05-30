//css
import styles from './inputSearch.module.css'

export default function InputSearch(){
  return(
    <input
    className={styles.input}
    type="text"
    placeholder="Pesquisa..."
    />
  )
}