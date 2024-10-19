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
      <>
            <div>Age: {age}</div>
            <div>Gender: {gender}</div>
            <div>Amount: {accountStatus}</div>
      </>
    }>
        <InfoIcon className="info-icon" fontSize="small" />
    </Tooltip>
  )
}