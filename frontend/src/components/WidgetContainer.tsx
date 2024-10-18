/** @jsxImportSource @emotion/react */
import React from "react";
import Paper from "@mui/material/Paper";
import { css } from "@emotion/react";

interface WidgetContainerProps {
    children: React.ReactNode;
	elevation?: number;
	width?: number | string;
	height?: number | string;
}

export const WidgetContainer: React.FC<WidgetContainerProps> = ({
	children,
    elevation = 3,
	width = "20rem",
	height = "20rem",
}) => {
	const widgetPaperStyle = css({
		width: width,
		height: height,
		padding: "5rem",
	});

	return (
		<Paper variant="elevation" elevation={elevation} css={widgetPaperStyle}>
			{children}
		</Paper>
	);
};
