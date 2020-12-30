import styles from "./style.module.css";

const TimerText = ({ text }) => {
	return (
		<>
			<div className={styles.timer_main}>{text}</div>
		</>
	);
};

export default TimerText;
