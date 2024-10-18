/** @jsxImportSource @emotion/react */
import React from "react";
import { WidgetContainer } from "../../components/WidgetContainer/WidgetContainer";
import { Button } from "../../components/Button/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import { Card } from "../../components/Card/Card";
import { Typography } from "@mui/material";
import { productsCardsStyle, productsContainerStyle, productsHeaderStyle } from "./RecommendedProducts.styles";

export const RecommendedProducts: React.FC = () => {
	return (
		<WidgetContainer width={"30rem"} height={"37rem"}>
			<div css={productsContainerStyle}>
				<span css={productsHeaderStyle}>
					<h2>Recommended Products</h2>
					<Button bgColor={"#FFD700"} txtColor={"black"} endIcon={<ArrowForwardIcon />}>
						READ MORE
					</Button>
				</span>
				<div css={productsCardsStyle}>
					<Card
						title={<Typography variant="h6">Service</Typography>}
						avatar={<AssuredWorkloadIcon />}
						content={<p>content</p>}
					>
						<div>
							<Button variant="outlined" bgColor={"white"} txtColor={"black"} endIcon={<ArrowForwardIcon />}>
								Choose
							</Button>
						</div>
					</Card>
					<Card
						title={
							<Typography variant="h6" component="div">
								Service
							</Typography>
						}
						avatar={<AssuredWorkloadIcon />}
						content={<p>content</p>}
					>
						<div>
							<Button variant="outlined" bgColor={"white"} txtColor={"black"} endIcon={<ArrowForwardIcon />}>
								Choose
							</Button>
						</div>
					</Card>
					<Card
						title={
							<Typography variant="h6" component="div">
								Service
							</Typography>
						}
						avatar={<AssuredWorkloadIcon />}
						content={<p>content</p>}
					>
						<div>
							<Button variant="outlined" bgColor={"white"} txtColor={"black"} endIcon={<ArrowForwardIcon />}>
								Choose
							</Button>
						</div>
					</Card>
				</div>
			</div>
		</WidgetContainer>
	);
};
