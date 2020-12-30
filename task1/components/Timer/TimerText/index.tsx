import React, { FC } from "react";

interface Props {
	classForText: string;
}

const TimerText: FC<Props> = ({ classForText }) => {
	return (
		<>
			<div className={classForText}>До Нового Года осталось:</div>
		</>
	);
};

export default TimerText;
