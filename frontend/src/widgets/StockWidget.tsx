import React, { useState, useEffect } from "react";
import { WidgetContainer } from "../../src/components/WidgetContainer/WidgetContainer";
import StockList from "../components/Stock/StockList";
import StockChart from "../components/Stock/StockChart";
import { Box } from "@mui/material"; // Import MUI's Box for styling
import { StockDataPoint, StockItem } from "../types/types";

interface StockWidgetProps {}

interface StockData extends StockItem{
  data: StockDataPoint[];
}

const mulberry32 = (a: number): number => {
  let t = (a += 0x6d2b79f5);
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const generateMockStockData = (days: number, id: number): StockDataPoint[] => {
  const selectedStock = mockData.find((item) => item.id === id);

  if (!selectedStock) {
    throw new Error("Selected stock symbol not found");
  }

  const data: StockDataPoint[] = [];
  let price: number = selectedStock.price;
  const today = new Date();

  for (let i = days; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const change: number = price * (mulberry32(i | id) * 0.06 - 0.03);
    price += change;

    data.push({
      date: date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      price: Number(price.toFixed(2)),
      fullIndex: i,
    });
  }

  return data; // Return just the data array
};

let mockData: StockData[] = [
  {
    id: 1,
    symbol: "SPXUSD",
    name: "S&P 500",
    price: 4290.6,
    change: 12.3,
    changePercentage: "+0.29%",
    color: "#FF0000",
    data: [],
  },
  {
    id: 2,
    symbol: "NSXUSD",
    name: "US 100",
    price: 14607.5,
    change: 44.1,
    changePercentage: "+0.30%",
    color: "#0000FF",
    data: [],
  },
  {
    id: 3,
    symbol: "DJI",
    name: "Dow 30",
    price: 33733.5,
    change: 73.5,
    changePercentage: "+0.22%",
    color: "#00FFFF",
    data: [],
  },
  {
    id: 4,
    symbol: "NKY",
    name: "Nikkei 225",
    price: 32371.9,
    change: -56.85,
    changePercentage: "-0.18%",
    color: "#8A2BE2",
    data: [],
  },
];

const StockWidget: React.FC<StockWidgetProps> = () => {
  const [selectedSymbol, setSelectedSymbol] = useState<number>(0);
  const [data, setData] = useState<StockData[] | null>(null);


  useEffect(() => {

    const fetchData = async (days: number) => {
      try {
        const data = mockData.map((item) => ({
          ...item,
          data: generateMockStockData(days, item.id),
        }));
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData(1000);
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <WidgetContainer width={"30rem"} height={"40rem"}>
      Price {data[selectedSymbol].name}
      <Box
        sx={{
          display: "flex", // Flexbox for row layout
          flexDirection: "row",
          width: "100%",
          height: "100%",
        }}
      >
        <Box sx={{ flex: 1, paddingRight: '1rem'}}>
          <StockChart selectedSymbol={selectedSymbol} data={data[selectedSymbol].data}/>
        </Box>

        <Box sx={{ flex: 1 }}>
          <StockList onClick={setSelectedSymbol} selectedSymbol={selectedSymbol} StockItemList={data}/>
        </Box>
      </Box>
    </WidgetContainer>
  );
};

export default StockWidget;



