import { Tooltip } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import './Tooltip.css'

interface IProps {
    age: number;
    gender: string;
    rating: string;
}

export function ButtonTooltip({age, gender, rating}: IProps) {
  return (
    <Tooltip title={
        <ul className="list">
            <li className="list-element">Age: {age}</li>
            <li className="list-element">Gender: {gender}</li>
            <li className="list-element">Rating: {rating}</li>
        </ul>
    }>
        <InfoIcon className="info-icon" fontSize="small" />
    </Tooltip>
  )
}