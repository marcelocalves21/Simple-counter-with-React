import React, { useState, useEffect } from "react";

export const Counter1 = () => {
	const [count, setCount] = useState(0);

	if (count === 10) {
		setCount(0);
	}

	useEffect(() => {
		setInterval(() => {
			setCount(count => count + 1);
		}, 1000);
	}, []);
	return (
		<span
			style={{
				padding: "0px 25px",
				margin: "5px 10px",
				border: "1px solid lightgray",
				borderRadius: "15px",
				borderLeft: "5px solid lightgray",
				borderRight: "5px solid lightgray"
			}}>
			{count}
		</span>
	);
};

export const Counter2 = () => {
	const [count, setCount] = useState(0);

	if (count === 10) {
		setCount(0);
	}

	useEffect(() => {
		setInterval(() => {
			setCount(count => count + 1);
		}, 10000);
	}, []);
	return (
		<span
			style={{
				padding: "0px 25px",
				margin: "5px 10px",
				border: "1px solid lightgray",
				borderRadius: "15px",
				borderLeft: "5px solid lightgray",
				borderRight: "5px solid lightgray"
			}}>
			{count}
		</span>
	);
};
export const Counter3 = () => {
	const [count, setCount] = useState(0);

	if (count === 10) {
		setCount(0);
	}

	useEffect(() => {
		setInterval(() => {
			setCount(count => count + 1);
		}, 100000);
	}, []);
	return (
		<span
			style={{
				padding: "0px 25px",
				margin: "5px 10px",
				border: "1px solid lightgray",
				borderRadius: "15px",
				borderLeft: "5px solid lightgray",
				borderRight: "5px solid lightgray"
			}}>
			{count}
		</span>
	);
};
export const Counter4 = () => {
	const [count, setCount] = useState(0);

	if (count === 10) {
		setCount(0);
	}

	useEffect(() => {
		setInterval(() => {
			setCount(count => count + 1);
		}, 1000000);
	}, []);
	return (
		<span
			style={{
				padding: "0px 25px",
				margin: "5px 10px",
				border: "1px solid lightgray",
				borderRadius: "15px",
				borderLeft: "5px solid lightgray",
				borderRight: "5px solid lightgray"
			}}>
			{count}
		</span>
	);
};
export const Counter5 = () => {
	const [count, setCount] = useState(0);

	if (count === 10) {
		setCount(0);
	}

	useEffect(() => {
		setInterval(() => {
			setCount(count => count + 1);
		}, 10000000);
	}, []);
	return (
		<span
			style={{
				padding: "0px 25px",
				margin: "5px 10px",
				border: "1px solid lightgray",
				borderRadius: "15px",
				borderLeft: "5px solid lightgray",
				borderRight: "5px solid lightgray"
			}}>
			{count}
		</span>
	);
};
export const Counter6 = () => {
	const [count, setCount] = useState(0);

	if (count === 10) {
		setCount(0);
	}

	useEffect(() => {
		setInterval(() => {
			setCount(count => count + 1);
		}, 100000000);
	}, []);
	return (
		<span
			style={{
				padding: "0px 25px",
				margin: "5px 10px",
				border: "1px solid lightgray",
				borderRadius: "15px",
				borderLeft: "5px solid lightgray",
				borderRight: "5px solid lightgray"
			}}>
			{count}
		</span>
	);
};
