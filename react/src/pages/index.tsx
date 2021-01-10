import React, { useEffect, useState, FC } from "react";
import Head from "next/head";
import dayjs from "dayjs";
import styles from "../styles/Home.module.css";
import Timer from "../module/TimerModule";
import { TextField, FormControlLabel, Button } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

export default function Home() {
	const [isUTC, setisUTC] = useState(false);
	const [start, setstart] = useState(false);

	const handleUtcChange = (event) => {
		setisUTC(event.target.checked);
	};

	const [calendarePickedDate, setCalendarePickedDate] = useState();

	const calendarDateChange = (value) => {
		setCalendarePickedDate(value);
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Timer module</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.14.1/react-datepicker.min.css"
				/>
			</Head>

			<main className={styles.main}>
				<div>
					<form noValidate>
						<TextField
							id="datetime-local"
							label="Choose needed date:"
							type="datetime-local"
							defaultValue={`${dayjs(new Date()).format("YYYY-MM-DDTHH:mm")}`}
							InputLabelProps={{
								shrink: true,
							}}
							onChange={(event) => calendarDateChange(event.target.value)}
						/>
					</form>
					<div>
						<FormControlLabel
							control={
								<Checkbox
									checked={isUTC}
									onChange={handleUtcChange}
									name="checkedA"
								/>
							}
							label="Use UTC time"
						/>
					</div>
					<div className={"button"}>
						{start ? null : (
							<Button
								variant="contained"
								color="primary"
								onClick={() => setstart(true)}
								disabled={calendarePickedDate ? false : true}
							>
								Set up timer
							</Button>
						)}
					</div>
				</div>
				<Timer
					countdownFormat={"short"}
					start={start}
					isUTC={isUTC}
					date={calendarePickedDate}
					timerTextClass={"normal"}
				/>
			</main>
		</div>
	);
}
