import styles from "./page.module.css";

export default function Home() {
  const key = process.env.NEXT_PUBLIC_KEY;
  return <main className={styles.main}>KEY: {key}</main>;
}
