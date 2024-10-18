import { Button } from "@mui/material";
import { ButtonTooltip } from "../Tooltip/Tooltip";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import "./Header.css";
import { Accordion } from "../Accordion/Accordion";

const users = [
	{
		id: "102938484",
		name: "James",
		age: 30,
		gender: "male",
		rating: "rich",
	},
	{
		id: "102938495",
		name: "Emma",
		age: 28,
		gender: "female",
		rating: "poor",
	},
	{
		id: "102938506",
		name: "Olivia",
		age: 29,
		gender: "female",
		rating: "rich",
	},
];

export function Header(): React.ReactElement {
	return (
		<div className="header">
			{users.map((user) => (
				// <Button size="large" key={user.name} className="user-button" style={{ color: '#eab607'}}>
				//     {user.name}
				//     <ButtonTooltip age={user.age} gender={user.gender} rating={user.rating}/>
				// </Button>
				<Accordion key={user.name} title={user.name} expandIcon={<ArrowDownwardIcon />}>
					<ul className="list">
						<li className="list-element">Age: {user.age}</li>
						<li className="list-element">Gender: {user.gender}</li>
						<li className="list-element">Rating: {user.rating}</li>
					</ul>
				</Accordion>
			))}
		</div>
	);
}
