import { Button } from "@mui/material";
import { ButtonTooltip } from "../Tooltip/Tooltip";
import { useFetchAccounts } from "../../hooks/useFetchAccounts";

import './Header.css'
import { useCallback } from "react";

type IProps = {
    onChangeAccount: (accountId: number) => void;
}

export function Header({ onChangeAccount }: IProps ): React.ReactNode {

    const { data } = useFetchAccounts();

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
                <ButtonTooltip dateOfBirth={personalData.dateOfBirth} gender={personalData.salutation} accountStatus={user.balanceAmount}/>
            </Button>
})}
    </div>
  )
}
