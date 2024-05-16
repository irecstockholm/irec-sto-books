import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.books}>
        {[0,1,2,3,4,5,6,7,8,9,10].map((val) => (
          <div key={val} className={styles.book}>
            <Image src="/covers/example1.jpg" alt="Book 1" width={200} height={300}/>
            <h3 className={styles.title}>Book title</h3>
            <div className={styles.author}>Book Author</div>
            <div className={styles.year}>2020</div>
            <div className={styles.libID}>230.89</div>
          </div>
        ))}
      </div>
    </main>
  );
}
