/** @jsxImportSource @emotion/react */
import { WidgetContainer } from "../../components/WidgetContainer/WidgetContainer";
import { Button } from "../../components/Button/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import { Card } from "../../components/Card/Card";
import { Divider, Typography } from "@mui/material";
import { productsCardsStyle, productsContainerStyle, productsHeaderStyle } from "./RecommendedProducts.styles";
import { useFetchProducts } from "../../hooks/useFetchProducts";

type IProps = {
	userId: number;
}

export const RecommendedProducts = ({ userId }: IProps) => {

	const {
		data,
		isLoading,
        isFetched,
        isError,
	} = useFetchProducts(true, userId);


	console.log(data, isLoading, isFetched, isError);


	if (isLoading) {
        return <p>Loading...</p>;
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
					{data && data.map((product, i) => {
						return (
						<Card
						    key={`${product.id + product.title + i}`}
							title={
								<>
									<Typography variant="h6">{product.title}</Typography>
									<Divider/>
								</>
							}
							avatar={<AssuredWorkloadIcon />}
							content={<p>{product.description}</p>}
						>
							<div>
								<Button variant="outlined" bgColor={"white"} txtColor={"black"} endIcon={<ArrowForwardIcon />}>
									Choose
								</Button>
							</div>
						</Card>)
					})}
				</div>
			</div>
		</WidgetContainer>
	);
};
