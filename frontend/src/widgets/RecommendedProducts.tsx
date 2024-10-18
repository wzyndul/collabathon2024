import React from "react";
import { WidgetContainer } from "../components/WidgetContainer/WidgetContainer";
import { Button } from "../components/Button/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import { Card } from "../components/Card/Card";

export const RecommendedProducts: React.FC = () => {
	return (
		<WidgetContainer width={"30rem"} height={"40rem"}>
			<div>
				<h2>Recommended Products</h2>
				<Card title="Service" avatar={<AssuredWorkloadIcon />} content={<p>content</p>}>
					<div>
						<Button variant="text" onClick={() => console.log("Button clicked")}>
							Choose
						</Button>
					</div>
				</Card>
				<Card title="Service" avatar={<AssuredWorkloadIcon />} content={<p>content</p>}>
					<div>
						<Button variant="text" onClick={() => console.log("Button clicked")}>
							Choose
						</Button>
					</div>
				</Card>
				<Card title="Service" avatar={<AssuredWorkloadIcon />} content={<p>content</p>}>
					<div>
						<Button variant="text" onClick={() => console.log("Button clicked")}>
							Choose
						</Button>
					</div>
				</Card>
				<Button
					onClick={() => console.log("Button clicked")}
					bgColor={"#FFE90B"}
					txtColor={"black"}
					endIcon={<ArrowForwardIcon />}
				>
					CLICK ME
				</Button>
			</div>
		</WidgetContainer>
	);
};
