import React from "react";
import { List, ListItem, Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

interface AbstractListElement {
  id: number;
}

interface AbstractListProps {
  elements: AbstractListElement[];
  generateElement: (elem: AbstractListElement) => React.ReactNode;
  onClick?: (index: number) => void;
  selectedSymbol?: number;
  onShowMore?: () => void;
  hasMore?: boolean;
}

// Styled components
const GradientOverlay = styled(Box)({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 30%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0.3) 75%, rgba(255,255,255,1) 100%)",
});

const ListContainer = styled(Box)({
  position: "relative",
});

const AbstractList: React.FC<AbstractListProps> = ({
  elements,
  generateElement,
  onClick,
  selectedSymbol,
  onShowMore,
  hasMore = true,
}) => {
  return (
    <ListContainer>
      <List>
        {elements.map((item, index) => {
          const isLastItem = index === elements.length - 1;
          
          return (
            <ListItem
              key={item.id}
              onClick={onClick ? () => onClick(index) : undefined}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: "12px",
                padding: "10px",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
                cursor: onClick ? "pointer" : "default",
                backgroundColor: selectedSymbol === index ? "#f0f0f0" : "inherit",
                opacity: isLastItem && hasMore ? 0.3 : 1,
              }}
            >
              {generateElement(item)}
            </ListItem>
          );
        })}
      </List>
      
      {hasMore && (
        <GradientOverlay>
          <Button 
            variant="contained"
            onClick={onShowMore}
            sx={{
              backgroundColor: "white",
              color: "black",
              boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            Show More
          </Button>
        </GradientOverlay>
      )}
    </ListContainer>
  );
};

export default AbstractList;