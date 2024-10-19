/** @jsxImportSource @emotion/react */
import React from "react";
import { Fab } from "@mui/material";
import { fabStyle } from "./FloatingActionButton.styles";

interface FabProps {
	variant?: "circular" | "extended" | undefined;
    size?: "small" | "medium" | "large" | undefined;
	children: React.ReactNode;
}

export const FloatingActionButton: React.FC<FabProps> = ({
	variant = "circular",
    size,
	children,
}) => {

	return (
		<Fab
			variant={variant}
            size={size}
            css={fabStyle}
		>
			{children}
		</Fab>
	);
};
