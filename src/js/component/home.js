import React from "react";
import Clock from "./clock";
import { render, styles } from "./constant";

//create your first component
export function Home() {
	return (
		<div style={styles.root}>
			<Clock />
			{render()}
		</div>
	);
}
