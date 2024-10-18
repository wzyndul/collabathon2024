/** @jsxImportSource @emotion/react */
import React from "react";
import { AccordionDetails, AccordionSummary, Accordion as MUIAccordion } from "@mui/material";

interface AccordionProps {
	expandIcon?: React.ReactNode;
	title: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export const Accordion: React.FC<AccordionProps> = ({ expandIcon, title, children }) => {
	return (
		<MUIAccordion>
			<AccordionSummary expandIcon={expandIcon}>{title}</AccordionSummary>
			<AccordionDetails>{children}</AccordionDetails>
		</MUIAccordion>
	);
};
