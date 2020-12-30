import Head from "next/head";
import styles from "../styles/Home.module.css";
import Timer from "../components/Timer";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Timer date={"12-31-2020"} />
			</main>
		</div>
	);
}
