import { Button } from "../Button/Button";
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
						size={"large"}
						bgColor={"#002E3C"}
						txtColor={"white"}
						bgHover={"#01394a"}
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
