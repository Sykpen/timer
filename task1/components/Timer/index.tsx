import React, { useEffect, useState, FC } from "react";
import dayjs from "dayjs";
import TimerText from "./TimerText";

interface Props {
	date: string;
}

const Timer: FC<Props> = ({ date }) => {
	const calculateTimeLeft = () => {
		let nowDate = dayjs();
		let endDate = dayjs(date);
		const diff = endDate.diff(nowDate);
		return diff;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
		if (timeLeft <= 0) {
			return () => clearInterval(timer);
		}
	}, [timeLeft]);

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
			<TimerText classForText={timeLeft <= 0 ? "failure" : "normal"} />
			<div>{formatStringToDate()}</div>
			<div>{formatDateToStrings()}</div>
		</>
	);
};

export default Timer;
