import React from "react";
import { List, ListItem } from "@mui/material";
import { AbstractListElement } from "../types/types"; 
// interface AbstractListElement {
//   id: number;
// }

interface AbstractListProps {
  elements: AbstractListElement[];
  generateElement: (elem: AbstractListElement) => React.ReactNode;
  onClick?: (index: number) => void;
  selectedSymbol?: number;
}

const AbstractList: React.FC<AbstractListProps> = ({
  elements,
  generateElement,
  onClick,
  selectedSymbol,
}: AbstractListProps) => {
  return (
    <List
    sx={{
      backgroundColor: "#F1EFED",
      borderRadius: "1rem"
    }}>
      {elements.map((item, index) => (
        <ListItem
          key={item.id}
          onClick={onClick ? () => onClick(index): () => {}}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "1rem",
            padding: "1rem",
            // width: "100%",
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
