import Head from "next/head";
import styles from "../styles/Home.module.css";
import Timer from "../components/Timer";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.14.1/react-datepicker.min.css"
				/>
			</Head>

			<main className={styles.main}>
				<Timer countdownFormat={"full"} />
			</main>
		</div>
	);
}
