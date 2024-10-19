/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Button as MUIButton } from "@mui/material";
import { headerButtonStyle } from "./HeaderButton.styles";

interface HeaderButtonProps {
	variant?: "text" | "outlined" | "contained" | undefined;
    size?: "small" | "medium" | "large" | undefined;
	bgColor?: string;
    txtColor?: string;
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
	children: React.ReactNode;
	onClick?: () => void;
}

export const HeaderButton: React.FC<HeaderButtonProps> = ({
	variant = "contained",
    size,
	bgColor,
    txtColor,
	startIcon,
	endIcon,
	children,
	onClick,
}) => {
	const [isSelected, setIsSelected] = useState(false);
	const style = headerButtonStyle(bgColor, txtColor, variant, isSelected);

	const handleClick = () => {
		setIsSelected(true);
		console.log('selected');
        if (onClick) {
            onClick();
        }
	}

	return (
		<MUIButton
			css={style}
			variant={variant}
            size={size}
			startIcon={startIcon}
			endIcon={endIcon}
			onClick={handleClick}
			disableElevation={true}
		>
			{children}
		</MUIButton>
	);
};
