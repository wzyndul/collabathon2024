import { Button } from "@mui/material";
import { ButtonTooltip } from "../Tooltip/Tooltip";
// import { useFetchAccounts } from "../../hooks/useFetchAccounts";
import { IAccount } from "../../hooks/useFetchAccounts";

import './Header.css'
import { useCallback } from "react";

type IProps = {
    onChangeAccount: (accountId: number) => void;
    data: IAccount[] | undefined;
}

export function Header({ onChangeAccount, data }: IProps ): React.ReactNode {


    const handleClick = useCallback((accountId: number) => onChangeAccount(accountId), [onChangeAccount])

    if (!data) {
            return null
    };

  return (
    <div className="header">
        {data.map((user) => {
            const personalData = user.client; 
            return <Button onClick={() => handleClick(user.id)} size="large" key={user.id} className="user-button" style={{ color: '#eab607'}}>
                {personalData.salutation} {personalData.firstName}
                <ButtonTooltip age={personalData.age} gender={personalData.salutation} accountStatus={user.balanceAmount}/>
            </Button>
})}
    </div>
  )
}
