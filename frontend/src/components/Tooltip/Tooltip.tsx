import { Tooltip } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import './Tooltip.css'

interface IProps {
    age: string;
    gender: string;
    accountStatus: number;
}

export function ButtonTooltip({age, gender, accountStatus}: IProps) {
  return (
    <Tooltip title={
        <ul className="list">
            <li className="list-element">Age: {age}</li>
            <li className="list-element">Gender: {gender}</li>
            <li className="list-element">Amount: {accountStatus}</li>
        </ul>
    }>
        <InfoIcon className="info-icon" fontSize="small" />
    </Tooltip>
  )
}