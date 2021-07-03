import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Counter = ({ time }) => {
	const [count, setCount] = useState(0);

	if (count === 10) {
		setCount(0);
	}

	useEffect(() => {
		setInterval(() => {
			setCount(count => count + 1);
		}, time);
	}, []);
	return (
		<span
			style={{
				background: "rgb(41,41,41)",
				padding: "0px 25px",
				margin: "5px 10px",
				border: "1px solid rgb(61, 61, 61)",
				borderRadius: "15px",
				borderLeft: "5px solid rgb(61, 61, 61)",
				borderRight: "5px solid rgb(61, 61, 61)"
			}}>
			{count}
		</span>
	);
};

Counter.propTypes = {
	time: PropTypes.time
};

export default Counter;
