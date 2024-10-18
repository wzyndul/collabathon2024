/** @jsxImportSource @emotion/react */
import React from "react";
import { Card as MUICard, CardHeader, CardContent, CardActions } from "@mui/material";

interface CardProps {
    title?: string;
    avatar?: React.ReactNode;
	content: React.ReactNode;
    children?: React.ReactNode;
    disableSpacing?: boolean;
}

export const Card: React.FC<CardProps> = ({ title, avatar, content, children, disableSpacing }) => {
	return (
		<MUICard>
			<CardHeader title={title} avatar={avatar}/>
			<CardContent>{content}</CardContent>
            <CardActions disableSpacing={disableSpacing}>{children}</CardActions>
		</MUICard>
	);
};
