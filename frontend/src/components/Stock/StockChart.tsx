import React, { useEffect, useState } from "react";
import Chart from "../Chart";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

interface StockDataPoint {
  date: string;
  price: number;
  fullIndex: number;
}

interface StockChartProps {
  title?: string;
  selectedSymbol?: number;
}

const generateMockStockData = (days: number): StockDataPoint[] => {
  const data: StockDataPoint[] = [];
  let price: number = 100;
  const today = new Date();

  for (let i = days; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const change: number = price * (Math.random() * 0.06 - 0.03);
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

  return data;
};

const periods: Record<string, number> = {
  "1D": 1,
  "1W": 7,
  "1M": 30,
  "3M": 90,
  "1Y": 365,
  "5Y": 1825,
};

const StyledButton = styled(Button)<{ selected: boolean }>(({ theme, selected }) => ({
  color: "black",
  borderRadius: "20px",
  margin: "0 5px",
  backgroundColor: selected ? theme.palette.action.selected : "transparent",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const ButtonContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "10px",
});

const StockChart: React.FC<StockChartProps> = ({ title = "Stock Price History", selectedSymbol }) => {
  const [data, setData] = useState<StockDataPoint[] | null>(null);
  const [period, setPeriod] = useState<number>(periods["1W"]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = generateMockStockData(365);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [selectedSymbol]);

  const getFilteredData = () => {
    if (!data) return [];
    const today = new Date();
    const cutoffDate = new Date(today.setDate(today.getDate() - period));
    return data.filter((point) => new Date(point.date) >= cutoffDate);
  };

  const generateGetCustomXAxisTicks = (): ((data: StockDataPoint[]) => number[]) => {
    switch (period) {
      case periods["1D"]:
      case periods["1W"]:
        return (data: StockDataPoint[]): number[] => {
          return data.map((item) => item.fullIndex);
        };
      case periods["1M"]:
        return (data: StockDataPoint[]): number[] => {
          const currentDateIndex = data.length - 1;
          return data
            .map((item, index) => {
              if (index === currentDateIndex || (index % 7 === 0 && index < currentDateIndex)) {
                return item.fullIndex;
              }
              return null;
            })
            .filter((item): item is number => item !== null);
        };
      case periods["3M"]:
        return (data: StockDataPoint[]): number[] => {
          return data
            .map((item, index) => {
              if (index === data.length - 1 || index % 14 === 0) {
                return item.fullIndex;
              }
              return null;
            })
            .filter((item): item is number => item !== null);
        };
      case periods["1Y"]:
        return (data: StockDataPoint[]): number[] => {
          return data
            .map((item, index) => {
              if (index === data.length - 1 || index % 15 === 0) {
                return item.fullIndex;
              }
              return null;
            })
            .filter((item): item is number => item !== null);
        };
      case periods["5Y"]:
        return (data: StockDataPoint[]): number[] => {
          return data.map((item) => item.fullIndex);
        };
      default:
        return (data: StockDataPoint[]): number[] => {
          return data.map((item) => item.fullIndex);
        };
    }
  };

  const xLabelGenerator = (): ((date: string) => string) => {
    switch (period) {
      case periods["1D"]:
      case periods["1W"]:
      case periods["1M"]:
      case periods["3M"]:
        return (date: string): string => {
          return new Date(date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
          });
        };
      case periods["1Y"]:
        return (date: string): string => {
          return new Date(date).toLocaleDateString("en-US", {
            month: "short",
          });
        };
      case periods["5Y"]:
        return (date: string): string => {
          return new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
          });
        };
      default:
        return (date: string): string => date;
    }
  };

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Chart
        data={getFilteredData()}
        label={title}
        xLabelGenerator={xLabelGenerator()}
        getCustomXAxisTicks={generateGetCustomXAxisTicks()}
        yLabelGenerator={(val) => `$${val.toFixed(2)}`}
      />
      <ButtonContainer>
        {Object.keys(periods).map((key) => (
          <StyledButton key={key} selected={periods[key] === period} onClick={() => setPeriod(periods[key])}>
            {key}
          </StyledButton>
        ))}
      </ButtonContainer>
    </>
  );
};

export default StockChart;
