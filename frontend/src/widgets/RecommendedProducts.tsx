import React from "react";
import { WidgetContainer } from "../components/WidgetContainer/WidgetContainer";
import { Button } from "../components/Button/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const RecommendedProducts: React.FC = () => {
	return (
		<WidgetContainer width={"30rem"} height={"60rem"}>
			<div>
				<h2>Recommended Products</h2>
				<p>lorem ipsum</p>
				<Button
					onClick={() => console.log("Button clicked")}
					bgColor={"#FFE90B"}
					txtColor={"black"}
					endIcon={<ArrowForwardIcon />}
				>
					Click me
				</Button>
			</div>
		</WidgetContainer>
	);
};
