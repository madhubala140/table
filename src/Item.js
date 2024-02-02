import React from "react";

const Item = ({ item }) => {
	return (
		<tr>
			<td>{item.date}</td>
			<td>{item.views}</td>
			<td>{item.article}</td>
		</tr>
	);
};

export default Item;