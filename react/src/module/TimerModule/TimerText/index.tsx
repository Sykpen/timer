import React, { FC } from "react";

interface Props {
	classForText: string;
}

const TimerText: FC<Props> = ({ classForText }) => {
	return (
		<>
			<div className={classForText}>Time left before the set time:</div>
		</>
	);
};

export default TimerText;
