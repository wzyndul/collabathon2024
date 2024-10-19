import React, { useEffect, useState } from "react";
import axios from "axios";
import AbstractList from "./AbstractList";
import { WidgetContainer } from "./WidgetContainer/WidgetContainer";
import FlagStack from "./FlagStack";
import { ListItem, Card, ListItemIcon, ListItemText, Typography, Stack } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import StockImage from "../assets/diagram.svg";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TransferIcon from "@mui/icons-material/SwapHoriz";
import {
  AbstractListElement,
  LoanElement,
  ForexElement,
  StockElement,
  MoneyTransferElement,
  HistoryDataElement,
} from "../types/types";



interface HistoryListProps {
  data: HistoryDataElement[];
}

const HistoryList: React.FC<HistoryListProps> = ({ data }: HistoryListProps) => {
  const generateElement = (elem: AbstractListElement) => {
    const his = elem as HistoryDataElement;
    switch (his.transactionType) {
      case "CURRENCY_EXCHANGE":
        const forex = elem as ForexElement;
        return (
          <>
            <ListItemIcon>
              {/* <FlagStack country1={forex.country1} country2={forex.country2} /> */}
              TODO {/* TODO add function map CURENCY TO FLAG */}
            </ListItemIcon>

            <ListItemText
              primary={
                <Stack direction="column" spacing={0.5}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="body1">{forex.currency}</Typography>
                    <EastIcon fontSize="small" color="inherit" />
                    <Typography variant="body1">{forex.targetCurrency}</Typography>
                  </Stack>
                  <Typography variant="caption" color="textSecondary">
                    {forex.transactionDate}
                  </Typography>
                </Stack>
              }
              sx={{ flexGrow: 1, marginLeft: "8px" }}
            />

            <Stack direction="column" alignItems="flex-end" sx={{ flexShrink: 0 }}>
              <Typography variant="body1" color="error">
                {`-${forex.originalAmount} ${forex.currency}`}
              </Typography>
              <Typography variant="body2" color="success">
                {`+${forex.exchangedAmount} ${forex.targetCurrency}`}
              </Typography>
            </Stack>
          </>
        );

      case "INVESTMENT":
        const stock = elem as StockElement;
        return (
          <>
            <ListItemIcon>
              <img src={StockImage} alt="My SVG" style={{ width: "50px", height: "50px" }} />
            </ListItemIcon>

            <ListItemText
              primary={
                <Stack direction="column" spacing={0.5}>
                  <Typography variant="body1">{stock.stockName}</Typography>
                  <Typography variant="caption" color="textSecondary">
                    {stock.transactionDate}
                  </Typography>
                </Stack>
              }
              sx={{ flexGrow: 1, marginLeft: "8px" }}
            />

            {/* <Stack direction="column" alignItems="flex-end" sx={{ flexShrink: 0 }}> */}
              <Typography variant="body1" color="error">
                {`${stock.amount} ${stock.currency}`}
              </Typography>
              {/* <Typography variant="body2" color="grey">
                {`Amount ${stock.stockAmount}`}
              </Typography> */}
            {/* </Stack> */}
          </>
        );

      case "LOAN":
        const loan = elem as LoanElement;
        return (
          <>
            <ListItemIcon>
              <AccountBalanceIcon sx={{ color: "#000" }} />
            </ListItemIcon>

            <ListItemText
              primary={
                <Stack direction="column" spacing={0.5}>
                  <Typography variant="body1">{loan.description}</Typography>
                  <Typography variant="caption" color="textSecondary">
                    {loan.transactionDate}
                  </Typography>
                </Stack>
              }
              sx={{ flexGrow: 1, marginLeft: "8px" }}
            />

            <Typography variant="body1" color="green">
              {`+${loan.loanAmount} ${loan.currency}`}
            </Typography>
          </>
        );
      case "MONEY_TRANSFER":
        const moneyTransfer = elem as MoneyTransferElement;
        return (
          <>
            <ListItemIcon>
              <TransferIcon sx={{ color: "#000" }} />
            </ListItemIcon>

            <ListItemText
              primary={
                <Stack direction="column" spacing={0.5}>
                  <Typography variant="body1">{moneyTransfer.description}</Typography>
                  <Typography variant="caption" color="textSecondary">
                    {moneyTransfer.transactionDate}
                  </Typography>
                </Stack>  
              }
              sx={{ flexGrow: 1, marginLeft: "8px" }}
            />

            <Typography variant="body1" color={moneyTransfer.amount > 0 ? "green" : "red"}>
              {`${moneyTransfer.amount > 0 ? "+" : ""}${moneyTransfer.amount} ${moneyTransfer.currency}`}
            </Typography>
          </>
        );
      default:
        return null;
    }
  };

  return (
    // <Card
    //   sx={{
    //     width: 400,
    //     height: "auto",
    //     padding: 2,
    //     position: "relative",
    //     display: "flex",
    //     flexDirection: "column",
    //     borderRadius: "1rem",
    //   }}
    // >
    <>
      <AbstractList generateElement={generateElement} elements={data} />
      </>
    // </Card>
  );
};

export default HistoryList;
