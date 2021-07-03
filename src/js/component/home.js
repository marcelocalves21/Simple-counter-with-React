import React, { useState, useEffect } from "react";
// import {
// 	Counter1,
// 	Counter2,
// 	Counter3,
// 	Counter4,
// 	Counter5,
// 	Counter6
// } from "./counter";
import Counter from "./counter";
import Clock from "./clock";

//create your first component
export function Home() {
	let time = [1000, 10000, 100000, 1000000, 10000000, 100000000];
	return (
		<div
			style={{
				width: "auto",
				fontSize: "10em",
				background: "black",
				color: "white",
				textAlign: "center"
			}}>
			<Clock />
			<Counter time={time[5]} />
			<Counter time={time[4]} />
			<Counter time={time[3]} />
			<Counter time={time[2]} />
			<Counter time={time[1]} />
			<Counter time={time[0]} />
		</div>
	);
}
