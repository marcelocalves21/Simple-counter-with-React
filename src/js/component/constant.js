import React from "react";
import Counter from "./counter";

export const styles = {
	root: {
		width: "auto",
		fontSize: "10em",
		background: "black",
		color: "white",
		textAlign: "center"
	},
	components: {
		background: "rgb(41,41,41)",
		padding: "0px 25px",
		margin: "5px 10px",
		border: "1px solid rgb(61, 61, 61)",
		borderRadius: "15px",
		borderLeft: "5px solid rgb(61, 61, 61)",
		borderRight: "5px solid rgb(61, 61, 61)"
	}
};

export const time = [1000, 10000, 100000, 1000000, 10000000, 100000000];
export const render = () => {
	return time.sort((a, b) => b - a).map(e => <Counter key={e} time={e} />);
};
