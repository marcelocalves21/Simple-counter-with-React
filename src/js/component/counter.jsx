import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { styles } from "./constant";

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
	return <span style={styles.components}>{count}</span>;
};

Counter.propTypes = {
	time: PropTypes.time
};

export default Counter;
