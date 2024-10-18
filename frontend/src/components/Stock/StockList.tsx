import React from "react";
import AbstractList from "../AbstractList";
import { Avatar, Typography, Box } from "@mui/material";

interface StockItem extends AbstractListElement {
  id: number;
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercentage: string;
  color: string;
}

interface AbstractListElement {
  id: number;
}

interface StockListProps {
  //   elements: StockItem[]; // Ensure that elements are of type StockItem
  onClick: (index: number) => void;
  selectedSymbol: number;
}

const mockData: StockItem[] = [
  {
    id: 1,
    symbol: "SPXUSD",
    name: "S&P 500",
    price: 4290.6,
    change: 12.3,
    changePercentage: "+0.29%",
    color: "#FF0000",
  },
  {
    id: 2,
    symbol: "NSXUSD",
    name: "US 100",
    price: 14607.5,
    change: 44.1,
    changePercentage: "+0.30%",
    color: "#0000FF",
  },
  {
    id: 3,
    symbol: "DJI",
    name: "Dow 30",
    price: 33733.5,
    change: 73.5,
    changePercentage: "+0.22%",
    color: "#00FFFF",
  },
  {
    id: 4,
    symbol: "NKY",
    name: "Nikkei 225",
    price: 32371.9,
    change: -56.85,
    changePercentage: "-0.18%",
    color: "#8A2BE2",
  },
];

const StockList: React.FC<StockListProps> = ({ onClick, selectedSymbol }: StockListProps) => {
  const generateElement = (elem: AbstractListElement) => {
    const stockItem = elem as StockItem; // Cast to StockItem

    return (
      <>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            sx={{
              bgcolor: stockItem.color,
              width: 40,
              height: 40,
              marginRight: 2,
            }}
          >
            {stockItem.symbol.slice(0, 3)}
          </Avatar>
          <Box>
            <Typography variant="body1">{stockItem.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              {stockItem.symbol}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ textAlign: "right" }}>
          <Typography variant="body1">{stockItem.price.toFixed(1)}</Typography>
          <Typography variant="body2" color={stockItem.change > 0 ? "green" : "red"}>
            {stockItem.change} ({stockItem.changePercentage})
          </Typography>
        </Box>
      </>
    );
  };

  return (
    <AbstractList
      onClick={onClick}
      elements={mockData} // Pass the StockItem data as elements
      generateElement={generateElement}
      selectedSymbol={selectedSymbol}
    />
  );
};

export default StockList;
