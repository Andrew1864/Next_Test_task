import styles from './styles.module.css'
 
export default function Page({ children }) {
  return <main className={styles.blog}>{children}</main>
}