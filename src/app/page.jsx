import Header from './Header/Header';
import styles from './page.module.css';
import RegisterProduct from './pages/Register-Product/RegisterProduct';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header_global}>
        <img src="img/Logo.png" />
        <button>Entrar</button>
      </div>
      <Header />
      <RegisterProduct />
    </main>
  );
}
