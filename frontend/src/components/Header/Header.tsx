import { Button } from "@mui/material";
import { ButtonTooltip } from "../Tooltip/Tooltip";
// import { useFetchAccounts } from "../../hooks/useFetchAccounts";
import { IAccount } from "../../hooks/useFetchAccounts";
import "./Header.css";
import { useCallback } from "react";

type IProps = {
	onChangeAccount: (accountId: number) => void;
	data: IAccount[] | undefined;
};

export function Header({ onChangeAccount, data }: IProps): React.ReactNode {
	const handleClick = useCallback((accountId: number) => onChangeAccount(accountId), [onChangeAccount]);

	if (!data) {
		return null;
	}

	return (
		<div className="header">
			{data.slice(0, 3).map((user) => {
				const personalData = user.client;
				return (
					<Button
						onClick={() => handleClick(user.id)}
						key={user.id}
						sx={{
							borderRadius: "2rem",
							height: "3rem",
							padding: "0.5rem 1rem 0.5rem 1rem",
							backgroundColor: "#002E3C",
							color: "white",
							transition: "transform 0.3s ease-in-out",
							"&:hover": {
								boxShadow: "4px 4px 0px 0px #ffd700",
								WebkitBoxShadow: "4px 4px 0px 0px #ffd700",
								MozBoxShadow: "4px 4px 0px 0px #ffd700",
								transform: "translate(-4px, -4px)",
							},
						}}
					>
						{personalData.type === "corporateClient"
							? `${personalData.companyName}`
							: `${personalData.salutation} ${personalData.firstName}`}
						{/* <ButtonTooltip age={personalData.age} gender={personalData.salutation} accountStatus={user.balanceAmount} /> */}
					</Button>
				);
			})}
		</div>
	);
}
