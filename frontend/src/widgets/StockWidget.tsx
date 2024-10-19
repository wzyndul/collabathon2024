import React, { useState } from "react";
import { WidgetContainer } from "../../src/components/WidgetContainer/WidgetContainer";
import StockList from "../components/Stock/StockList";
import StockChart from "../components/Stock/StockChart";

interface StockWidgetProps {
  //   symbols: string[];
}

const StockWidget: React.FC<StockWidgetProps> = ({}: StockWidgetProps) => {
  const [selectedSymbol, setSelectedSymbol] = useState<number>(0);

  return (
    <WidgetContainer width={"30rem"} height={"40rem"}>
      <StockChart selectedSymbol={selectedSymbol} />
      <StockList onClick={setSelectedSymbol} selectedSymbol={selectedSymbol} />
    </WidgetContainer>
  );
};

export default StockWidget;
