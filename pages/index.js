import styles from "../styles/Home.module.css";
import {useQuery} from 'react-query'

export default function Home({queryClient}) {
  console.log(useQuery())
  return (
      <main className={styles.main}></main>
  );
}
