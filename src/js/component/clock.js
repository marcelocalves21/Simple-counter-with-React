import React from "react";

const Clock = () => {
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
			<i className="far fa-clock"></i>
		</span>
	);
};
export default Clock;
