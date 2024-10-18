/** @jsxImportSource @emotion/react */
import React from "react";
import { Card as MUICard, CardHeader, CardContent, CardActions } from "@mui/material";
import { cardStyle } from "./Card.styles";

interface CardProps {
	title?: React.ReactNode;
	avatar?: React.ReactNode;
	content: React.ReactNode;
	children?: React.ReactNode;
	disableSpacing?: boolean;
	variant?: "outlined" | "elevation";
}

export const Card: React.FC<CardProps> = ({
	title,
	avatar,
	content,
	children,
	disableSpacing,
	variant,
}) => {
	return (
		<MUICard variant={variant} css={cardStyle}>
			<CardHeader avatar={avatar} title={title}></CardHeader>
			<CardContent>{content}</CardContent>
			<CardActions disableSpacing={disableSpacing}>{children}</CardActions>
		</MUICard>
	);
};
