import React from "react";
import { List, ListItem, Avatar, Typography, Box } from "@mui/material";

interface StockItem {
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

interface AbstractListProps {
  elements: AbstractListElement[];
  generateElement: (elem: AbstractListElement) => React.ReactNode;
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

const AbstractList: React.FC<AbstractListProps> = ({
  elements,
  generateElement,
  onClick,
  selectedSymbol,
}: AbstractListProps) => {
  return (
    <List>
      {elements.map((item, index) => (
        <ListItem
          key={item.id}
          onClick={() => onClick(index)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "12px",
            padding: "10px",
            marginBottom: "10px",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
            cursor: "pointer",

            backgroundColor: selectedSymbol === index ? "#f0f0f0" : "inherit",
          }}
        >
          {generateElement(item)}
        </ListItem>
      ))}
    </List>
  );
};

export default AbstractList;
