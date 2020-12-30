import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import dayjs from "dayjs";

const Timer = ({ date, dateFormatDate }) => {
	const calculateTimeLeft = () => {
		let nowDate = dayjs();
		// let endDate = dayjs(date, "MM-DD-YYYY");
		let endDateDateFormat = dayjs(dateFormatDate);
		const diff = endDateDateFormat.diff(nowDate);
		return diff;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
	});

	const formatStringToDate = () => {
		let finalDate = dayjs(timeLeft).format("DD:HH:mm:ss");
		return finalDate;
	};

	const formatDateToStrings = () => {
		let finalDate = dayjs(timeLeft).format("DD:HH:mm:ss");
		const [day, hour, minute, second] = finalDate.split(":");
		let finalString = `${day} ${Number(day) == 1 ? "day" : "days"} ${hour} ${
			Number(hour) == 1 ? "hour" : "hours"
		} ${minute} ${Number(minute) == 1 ? "minute" : "minutes"} ${second} ${
			Number(second) == 1 ? "second" : "seconds"
		}`;
		return finalString;
	};

	return (
		<>
			<div className={styles.timer_main}>{formatStringToDate()}</div>
			<div className={styles.timer_main}>{formatDateToStrings()}</div>
		</>
	);
};

export default Timer;
