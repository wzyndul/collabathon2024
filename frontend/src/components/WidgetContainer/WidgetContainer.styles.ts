import { css } from "@emotion/react";

export const widgetPaperStyle = (width: string | number, height: string | number, bgColor: string) => css`
	// 	width: ${width};
	// height: ${height};
	padding: 1.8rem;
	background-color: ${bgColor};
	border-radius: 1rem;
`;
