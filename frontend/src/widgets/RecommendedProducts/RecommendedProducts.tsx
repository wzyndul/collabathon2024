/** @jsxImportSource @emotion/react */
import React from "react";
import { WidgetContainer } from "../../components/WidgetContainer/WidgetContainer";
import { Button } from "../../components/Button/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import { Card } from "../../components/Card/Card";
import { Divider, Typography } from "@mui/material";
import { productsCardsStyle, productsContainerStyle, productsHeaderStyle } from "./RecommendedProducts.styles";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { GradientCircularProgress } from "../../components/CircularProgress/GradientCircularProgress";

export const RecommendedProducts: React.FC = () => {

	const {
		data,
		isLoading,
        isFetched,
        isError,
	} = useFetchProducts(true);


	console.log(data, isLoading, isFetched, isError);


	if (isLoading) {
        return <GradientCircularProgress />;
    }

	return (
		<WidgetContainer width={"30rem"} height={"37rem"} bgColor="#fbfbfe">
			<div css={productsContainerStyle}>
				<span css={productsHeaderStyle}>
					<h2>Recommended Products</h2>
					<Button bgColor={"#FFD700"} txtColor={"black"} endIcon={<ArrowForwardIcon />}>
						READ MORE
					</Button>
				</span>
				<div css={productsCardsStyle}>
					<Card
						title={
							<>
								<Typography variant="h6">Service</Typography>
								<Divider/>
							</>
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
