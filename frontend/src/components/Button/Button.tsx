/** @jsxImportSource @emotion/react */
import React from "react";
import { Button as MUIButton } from "@mui/material";
import { buttonStyle } from "./Button.styles";

interface ButtonProps {
	variant?: "text" | "outlined" | "contained" | undefined;
    size?: "small" | "medium" | "large" | undefined;
	bgColor?: string;
    txtColor?: string;
	onClick: () => void;
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
	children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
	variant = "contained",
    size,
	bgColor,
    txtColor,
	onClick,
	startIcon,
	endIcon,
	children,
}) => {
	const style = buttonStyle(bgColor, txtColor);

	return (
		<MUIButton
			css={style}
			variant={variant}
            size={size}
			onClick={onClick}
			startIcon={startIcon}
			endIcon={endIcon}
			disableElevation={true}
		>
			{children}
		</MUIButton>
	);
};
