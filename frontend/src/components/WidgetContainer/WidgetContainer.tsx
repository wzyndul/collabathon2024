/** @jsxImportSource @emotion/react */
import React from "react";
import Paper from "@mui/material/Paper";
import { widgetPaperStyle } from "./WidgetContainer.styles";

interface WidgetContainerProps {
	children: React.ReactNode;
	elevation?: number;
	width: number | string;
	height: number | string;
	backgroundColor?: string;
}

export const WidgetContainer: React.FC<WidgetContainerProps> = ({
	children,
	elevation = 3,
	width,
	height,
	backgroundColor = "#fbfbfe",
}) => {
	const style = widgetPaperStyle(width, height, backgroundColor);

	return (
		<Paper variant="elevation" elevation={elevation} css={style}>
			{children}
		</Paper>
	);
};
