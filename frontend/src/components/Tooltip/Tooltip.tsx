import { Tooltip } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import './Tooltip.css'

interface IProps {
    dateOfBirth: string;
    gender: string;
    accountStatus: number;
}

export function ButtonTooltip({dateOfBirth, gender, accountStatus}: IProps) {
  return (
    <Tooltip title={
        <ul className="list">
            <li className="list-element">Age: {dateOfBirth}</li>
            <li className="list-element">Gender: {gender}</li>
            <li className="list-element">Amount: {accountStatus}</li>
        </ul>
    }>
        <InfoIcon className="info-icon" fontSize="small" />
    </Tooltip>
  )
}