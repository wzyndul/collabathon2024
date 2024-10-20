import { Button } from "../Button/Button";
import { IAccount } from "../../hooks/useFetchAccounts";
import { useCallback } from "react";
import "./Header.css";

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
			{data.slice(0, 3).map((user, i) => {
				const personalData = user.client;
				return (
					<Button
						onClick={() => handleClick(user.id)}
						key={`${user.id}-${i}`}
						size={"large"}
						bgColor={"#002E3C"}
						txtColor={"white"}
						bgHover={"#01394a"}
					>
						{personalData.type === "corporateClient"
							? `${personalData.companyName}`
							: `${personalData.salutation} ${personalData.firstName}`}
					</Button>
				);
			})}
		</div>
	);
}
