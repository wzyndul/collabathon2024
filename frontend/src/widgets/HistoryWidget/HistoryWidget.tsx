/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import HistoryList from "../../components/HistoryList";
import { HistoryDataElement } from "../../types/types";
import { WidgetContainer } from "../../components/WidgetContainer/WidgetContainer";
import { Box, Button, Typography } from "@mui/material";
import { historyButtonsStyle, historyHeaderStyle } from "./HistoryWidget.styles";

const data: HistoryDataElement[] = [
	{
		id: 1,
		transactionType: "CURRENCY_EXCHANGE",
		transactionDate: "2021-07-14 12:00",
		amount: 100,
		currency: "USD",
		targetCurrency: "EUR",
		originalAmount: 100,
		exchangedAmount: 90,
	},
	{
		id: 2,
		transactionType: "INVESTMENT",
		transactionDate: "2021-07-14 12:00",
		currency: "USD",
		amount: 100,
		// stockAmount: 1,
		stockName: "AAPL",
	},
	{
		id: 3,
		transactionType: "LOAN",
		transactionDate: "2021-07-14 12:00",
		description: "Mortgage",
		loanAmount: 1000,
		amount: 1000,
		currency: "USD",
	},
	{
		id: 4,
		transactionType: "MONEY_TRANSFER",
		transactionDate: "2021-07-14 12:00",
		description: "John Doe",
		amount: -100,
		currency: "USD",
	},
];

// Define the filter options as constants.
const filterOptions = ["all", "income", "charge", "trade"];

// Define the HistoryWidget component.
const HistoryWidget: React.FC = () => {
	const [filter, setFilter] = useState<string>("all");
	//   const [data, setData] = useState<HistoryDataElement[]>([]);

	// Fetch data from the API when the component mounts.
	//   useEffect(() => {
	//     const fetchData = async () => {
	//       const result = await axios.get("http://localhost:5000/history");
	//       setData(result.data);
	//     };
	//     fetchData();
	//   }, []);

	const filteredData = data.filter((item) => {
		if (filter === "all") return true;
		if (filter === "income") {
			return item.transactionType === "LOAN" || (item.transactionType === "MONEY_TRANSFER" && item.amount > 0);
		}
		if (filter === "charge") {
			return item.transactionType === "MONEY_TRANSFER" && item.amount < 0;
		}
		if (filter === "trade") {
			return item.transactionType === "CURRENCY_EXCHANGE" || item.transactionType === "INVESTMENT";
		}
		return false;
	});
	console.log("filteredData", filteredData);
	return (
		<WidgetContainer width={"30rem"} height={"auto"} bgColor="#fbfbfe">
			<Box css={historyHeaderStyle}>
				<Typography variant="h5" sx={{ fontWeight: "bold" }}>
					Transaction History
				</Typography>
			</Box>
			<Box css={historyButtonsStyle}>
				{filterOptions.map((option) => (
					<Button
						key={option}
						onClick={() => setFilter(option)}
						sx={{
							border: "1px solid #FFD700",
							borderRadius: "2rem",
              padding: "0.5rem 1rem 0.5rem 1rem",
							backgroundColor: filter === option ? "#FFD700" : "transparent",
              color: filter === option ? "black" : "white",
							"&:hover": {
								backgroundColor: "#FFD700",
								color: "black",
							},
						}}
						style={{
							margin: "0 5px",
						}}
					>
						{option}
					</Button>
				))}
			</Box>
			<HistoryList data={filteredData.slice(0, 5)} />
		</WidgetContainer>
	);
};

export default HistoryWidget;
