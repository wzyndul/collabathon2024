import { css } from "@emotion/react";

export const widgetPaperStyle = (width: string | number, height: string | number, backgroundColor: string) => css`
	width: ${width};
	height: ${height};
	padding: 5rem;
	background-color: ${backgroundColor};
	border-radius: 1rem;
`;
