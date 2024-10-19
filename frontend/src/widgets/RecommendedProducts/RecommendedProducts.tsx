/** @jsxImportSource @emotion/react */
import { WidgetContainer } from "../../components/WidgetContainer/WidgetContainer";
import { Button } from "../../components/Button/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import AttachMoneyTwoToneIcon from '@mui/icons-material/AttachMoneyTwoTone';
import HouseTwoToneIcon from '@mui/icons-material/HouseTwoTone';
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import { Card } from "../../components/Card/Card";
import { Box, Divider, Typography } from "@mui/material";
import { productsCardsStyle, productsContainerStyle, productsHeaderStyle } from "./RecommendedProducts.styles";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { GradientCircularProgress } from "../../components/CircularProgress/GradientCircularProgress";

type IProps = {
	userId: number;
};

export const RecommendedProducts = ({ userId }: IProps) => {
	const { data, isLoading, isFetched } = useFetchProducts(true, userId);

	const showIcon = (offerType: string): React.ReactNode => {
		switch (offerType) {
			case 'LOAN':
				return <HouseTwoToneIcon style={{color: '#e0a200'}} />;
			case 'INVESTMENT':
				return <AttachMoneyTwoToneIcon style={{color: '#e0a200'}} />;
			case 'SAVINGS"':
				return <AccountBalanceWalletTwoToneIcon style={{color: '#e0a200'}} />;
			default:
				return <AssuredWorkloadIcon style={{color: '#e0a200'}}/>;
		}
	};


	if (isLoading || !isFetched) {
		return <GradientCircularProgress />;
	}

	return (
		<WidgetContainer width={"30rem"} height={"37rem"} bgColor="#fbfbfe">
			<div css={productsContainerStyle}>
				<Box css={productsHeaderStyle}>
					<Typography variant="h5" css={{ fontWeight: "bold" }}>
						Recommended Products
					</Typography>
					<Button bgColor={"#FFD700"} txtColor={"black"} endIcon={<ArrowForwardIcon />}>
						READ MORE
					</Button>
				</Box>
				<div css={productsCardsStyle}>
					{data &&
						data.map((product, i) => {
							return (
								<Card
									key={`${product.id}-${i}`}
									title={
										<>
											<Typography variant="h6">{product.title}</Typography>
											<Divider />
										</>
									}
									avatar={showIcon(product.offerType)}
									bgColor="#002E3C"
									txtColor="white"
									content={<p>{product.description}</p>}
								>
									<div>
										<Button bgColor={"#FFD700"} txtColor={"black"} endIcon={<ArrowForwardIcon />}>
											Choose
										</Button>
									</div>
								</Card>
							);
						})}
				</div>
			</div>
		</WidgetContainer>
	);
};
