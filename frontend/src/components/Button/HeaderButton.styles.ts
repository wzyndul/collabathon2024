import { css } from "@emotion/react";

// idk how does the border work in this configuration but I prefer not to investigate
export const headerButtonStyle = (bgColor?: string, txtColor?: string, variant?: "text" | "outlined" | "contained" | undefined, isSelected?: boolean) => css`
    border-radius: 1rem;
    background-color: ${isSelected ? 'yellow' : (variant === 'outlined' ? 'transparent' : bgColor)};
    color: ${isSelected ? 'black' : txtColor};
    text-transform: none;
    border: ${isSelected ? 'none' : (variant === 'outlined' ? `1px solid ${txtColor}` : `1px solid ${txtColor}`)};
    border-color: ${isSelected ? 'none' : (variant === 'outlined' ? `${txtColor}` : `${txtColor}`)};
`;