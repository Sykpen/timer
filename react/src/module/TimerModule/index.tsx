import React, { useEffect, useState, FC } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import TimerText from "./TimerText";
import { useInterval } from "../hooks/useInterval";

interface Props {
	countdownFormat: "short" | "full";
	start: boolean;
	isUTC: boolean;
	date: Date;
	timerTextClass: string;
}

const Timer: FC<Props> = ({
	countdownFormat,
	start,
	isUTC,
	date,
	timerTextClass,
}): JSX.Element => {
	const calculateTimeLeft = () => {
		if (start) {
			if (isUTC) {
				dayjs.extend(utc);
				return setTimeLeft(
					dayjs(date).utc().valueOf() - dayjs(dayjs()).valueOf()
				);
			}
			return setTimeLeft(dayjs(date).valueOf() - dayjs(dayjs()).valueOf());
		}
	};

	const [timeLeft, setTimeLeft] = useState(-1);

	const formatStringToDate = () => {
		if (timeLeft < 0) {
			return "00:00:00:00";
		}
		let finalDate = dayjs(timeLeft - 86400000).format("DD:HH:mm:ss");
		const [day, hour, minute, second] = finalDate.split(":");
		let finalString = `${
			Number(day) == 31 ? "00" : day
		}:${hour}:${minute}:${second}`;
		return finalString;
	};

	const formatDateToStrings = () => {
		if (timeLeft < 0) {
			return "00:00:00:00";
		}
		let finalDate = dayjs(timeLeft - 10798888 - 86400000).format("DD:HH:mm:ss");
		const [day, hour, minute, second] = finalDate.split(":");
		let finalString = `${Number(day) == 31 ? "00" : day} ${
			Number(day) == 1 ? "day" : "days"
		} ${hour} ${Number(hour) == 1 ? "hour" : "hours"} ${minute} ${
			Number(minute) == 1 ? "minute" : "minutes"
		} ${second} ${Number(second) == 1 ? "second" : "seconds"}`;
		return finalString;
	};

	useInterval(() => calculateTimeLeft(), 1000);

	return (
		<>
			<TimerText classForText={timeLeft <= 0 ? "failure" : timerTextClass} />

			<div>
				{countdownFormat === "full"
					? formatDateToStrings()
					: formatStringToDate()}
			</div>
		</>
	);
};

export default Timer;
