import React, { useEffect, useState, FC } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import TimerText from "./TimerText";
import { TextField, FormControlLabel, Button } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

interface Props {
	countdownFormat: "short" | "full";
}

const Timer: FC<Props> = ({ countdownFormat }): JSX.Element => {
	const [isUTC, setisUTC] = useState(false);
	const [start, setstart] = useState(false);

	const handleUtcChange = (event) => {
		setisUTC(event.target.checked);
	};

	const startTimer = () => {
		if (isUTC) {
			dayjs.extend(utc);
			setTimeLeft(dayjs(timeLeft).utc().valueOf());
		}
		setstart(true);
	};

	const [calendarePickedDate, setCalendarePickedDate] = useState(0);

	const calculateTimeLeft = () => {
		return calendarePickedDate - dayjs(dayjs()).valueOf();
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	const calendarDateChange = (value) => {
		setCalendarePickedDate(dayjs(value).valueOf());
	};

	useEffect(() => {
		if (start) {
			const timer = setTimeout(() => {
				setTimeLeft(calculateTimeLeft());
			}, 1000);
			if (timeLeft <= 0) {
				return () => clearInterval(timer);
			}
		}
	});

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

	return (
		<>
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
			<Button variant="contained" color="primary" onClick={startTimer}>
				Set up timer
			</Button>
			<TimerText classForText={timeLeft <= 0 ? "failure" : "normal"} />

			<div>
				{countdownFormat === "full"
					? formatDateToStrings()
					: formatStringToDate()}
			</div>
		</>
	);
};

export default Timer;
