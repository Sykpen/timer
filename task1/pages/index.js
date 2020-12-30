import Head from "next/head";
import styles from "../styles/Home.module.css";
import Timer from "../components/Timer";
import dayjs from "dayjs";

export default function Home() {
	const now = dayjs();
	let futureDateInDateFormat = now.set("hour", now.get("hour") + 12);
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Timer date={"01-01-2021"} dateFormatDate={futureDateInDateFormat} />
			</main>
		</div>
	);
}
