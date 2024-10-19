/** @jsxImportSource @emotion/react */
import React from "react";
import { AccordionDetails, AccordionSummary, Accordion as MUIAccordion, Typography } from "@mui/material";
import { accordionStyle } from "./Accordion.styles";
import { Button } from "../Button/Button";
import { HeaderButton } from "../Button/HeaderButton";

interface AccordionProps {
	expandIcon?: React.ReactNode;
	title: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export const Accordion: React.FC<AccordionProps> = ({ expandIcon, title, children }) => {
	return (
		<MUIAccordion css={accordionStyle}>
			<AccordionSummary expandIcon={expandIcon}><HeaderButton variant="outlined" bgColor={"white"} txtColor={"black"}><Typography variant='h6' sx={{fontWeight: 'bold'}}>{title}</Typography></HeaderButton></AccordionSummary>
			<AccordionDetails>{children}</AccordionDetails>
		</MUIAccordion>
	);
};
