import React, { useEffect, useState, FC } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import TimerText from "./TimerText";
import { useInterval } from "../hooks/useInterval";

interface Props {
	date: Date;
	start?: boolean;
	countdownFormat?: "short" | "full";
	isUTC?: boolean;
	timerTextClass?: string;
}

const Timer: FC<Props> = ({
	countdownFormat = "full",
	start = true,
	isUTC = false,
	date,
	timerTextClass = "normal",
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

	const formatDateToStrings = () => {
		if (timeLeft < 0) {
			return "00:00:00:00:00";
		}
		const dayInMouth = dayjs(timeLeft).daysInMonth();
		let finalDate = dayjs(timeLeft - 10798888 - 86400000).format(
			"MM:DD:HH:mm:ss"
		);
		const [month, day, hour, minute, second] = finalDate.split(":");

		if (countdownFormat === "full") {
			console.log(month);
			let monthString = `${
				Number(month) > 1 && Number(month) < 12 ? Number(month) - 1 : "00"
			} ${Number(month) - 1 == 1 ? "month" : "months"}`;
			let finalString = `${monthString} ${
				Number(day) == dayInMouth ? "00" : day
			} ${Number(day) == 1 ? "day" : "days"} ${hour} ${
				Number(hour) == 1 ? "hour" : "hours"
			} ${minute} ${Number(minute) == 1 ? "minute" : "minutes"} ${second} ${
				Number(second) == 1 ? "second" : "seconds"
			}`;
			return finalString;
		}
		let monthDate = `${
			Number(month) > 1 && Number(month) < 12 ? Number(month) - 1 : "0"
		}`;
		if (Number(month) - 1 < 10 || Number(month) == 12) {
			monthDate = `0${monthDate}`;
		}
		let finalString = `${monthDate}:${
			Number(day) == dayInMouth ? "00" : day
		}:${hour}:${minute}:${second}`;

		return finalString;
	};

	useInterval(() => calculateTimeLeft(), 1000);

	return (
		<>
			<TimerText classForText={timeLeft <= 0 ? "failure" : timerTextClass} />

			<div>{formatDateToStrings()}</div>
		</>
	);
};

export default Timer;
