import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import { Paper } from "@mui/material";

interface StockDataPoint {
  date: string;
  price: number;
  fullIndex: number;
}

interface StockChartProps {
  data?: StockDataPoint[];
  title?: string;
  symbol: string;
}

const generateMockStockData = (days: number): StockDataPoint[] => {
  const data: StockDataPoint[] = [];
  let price: number = 100;

  // Get today's date
  const today = new Date();

  for (let i = days; i >= 0; i--) {
    // Calculate the date for each entry, going back in time
    const date = new Date(today);
    date.setDate(today.getDate() - i); // Subtract i days from today

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

// Define the number of days for each period
const periods: Record<string, number> = {
  "1D": 1,
  "1W": 7,
  "1M": 30,
  "3M": 90,
  "1Y": 365,
  "5Y": 1825,
};

const StockChart: React.FC<StockChartProps> = ({ symbol, title = "Stock Price History" }) => {
  const [data, setData] = useState<StockDataPoint[] | null>(null);
  const [period, setPeriod] = useState<number>(periods["1W"]); // Default to 1 month

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mocking fetch request
        const data = generateMockStockData(365); // Generate data for a year
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // Function to filter data based on selected period in days
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
          const currentDateIndex = data.length - 1; // Current day
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
        // Fallback case
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
    <Paper
      elevation={2}
      sx={{
        p: 3,
        borderRadius: 2,
        bgcolor: "background.paper",
      }}
    >
      <Chart
        data={getFilteredData()}
        label={title}
        xLabelGenerator={xLabelGenerator()}
        getCustomXAxisTicks={generateGetCustomXAxisTicks()}
        yLabelGenerator={(val) => `$${val.toFixed(2)}`}
      />
      <div>
        {Object.keys(periods).map((key) => (
          <button key={key} onClick={() => setPeriod(periods[key])}>
            {key}
          </button>
        ))}
      </div>
    </Paper>
  );
};

export default StockChart;
