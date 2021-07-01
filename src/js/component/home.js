import React, { useState, useEffect } from "react";
import {
	Counter1,
	Counter2,
	Counter3,
	Counter4,
	Counter5,
	Counter6
} from "./counter";
import Clock from "./clock";

//create your first component
export function Home() {
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
			<Counter6 />
			<Counter5 />
			<Counter4 />
			<Counter3 />
			<Counter2 />
			<Counter1 />
		</div>
	);
}
