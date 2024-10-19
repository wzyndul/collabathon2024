import React, { useCallback } from "react";
import { Header } from "./components/Header/Header";
import { RecommendedProducts } from "./widgets/RecommendedProducts/RecommendedProducts";
import "./App.css";
import { Chatbot } from "./widgets/Chatbot/Chatbot";
import StockWidget from "./widgets/StockWidget";
import { Loading } from "./components/Loading/Loading";
import { useFetchProducts } from "./hooks/useFetchProducts";


function App() {
	const [userId, setUserId] = React.useState(1);
	const handleChangeAccount = useCallback((accountId: number) => setUserId(accountId), []);
	const { data, isLoading, isFetched } = useFetchProducts(true, userId);

	if (isLoading || !isFetched) {
		return <Loading />;
	}

	return (
		<div className="container">
			<Header onChangeAccount={handleChangeAccount} />
			<div className="page">
				{/* Pass the fetched data as props to RecommendedProducts */}
				<RecommendedProducts data={data} />
				{/* <StockWidget/> */}
				<Chatbot />
			</div>
		</div>
	);
}

export default App;
