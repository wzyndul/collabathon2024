import React from "react";
import { List, ListItem } from "@mui/material";

interface AbstractListElement {
  id: number;
}

interface AbstractListProps {
  elements: AbstractListElement[];
  generateElement: (elem: AbstractListElement) => React.ReactNode;
  onClick: (index: number) => void;
  selectedSymbol: number;
}

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
