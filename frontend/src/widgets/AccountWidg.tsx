import React from "react";
import TransferIcon from "@mui/icons-material/SwapHoriz";
import HistoryIcon from "@mui/icons-material/History";
import { Card, CardContent, Typography, Button } from "@mui/material";

interface AccountCardProps {
  accountType: string;
  accountNumber: string;
  balance: number;
}

const generateAccountNumber = (length: number = 10): string => {
  let accountNumber = "";
  for (let i = 0; i < length; i++) {
    accountNumber += Math.floor(Math.random() * 10).toString();
  }
  return accountNumber;
};

export const generateMockAccounts = (count: number): AccountCardProps[] => {
  const accountTypes = ["Savings", "Checking", "Business", "Joint"];
  const mockAccounts: AccountCardProps[] = [];

  for (let i = 0; i < count; i++) {
    const accountType = accountTypes[Math.floor(Math.random() * accountTypes.length)];
    const accountNumber = generateAccountNumber();
    const balance = parseFloat((Math.random() * 10000).toFixed(2));

    mockAccounts.push({ accountType, accountNumber, balance });
  }

  return mockAccounts;
};

// const AccountWidget: React.FC<AccountCardProps> = ({ accountType, accountNumber, balance }: AccountCardProps) => {
const AccountWidget: React.FC = () => {
  const { accountType, accountNumber, balance } = generateMockAccounts(1)[0];
  const firstDigit = accountNumber.slice(0, 2);
  const lastDigit1 = accountNumber.slice(-4);
  const lastDigit2 = accountNumber.slice(-8, -4);

  return (
    <Card
      sx={{
        width: '30rem',
        height: 180,
        padding: 2,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        borderRadius: "1rem",
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div" sx={{ position: "absolute", top: 12, left: 20 }}>
          {accountType}
        </Typography>

        <Typography variant="body2" component="div" sx={{ position: "absolute", top: 35, left: 20 }}>
          {firstDigit} (...) {lastDigit1} {lastDigit2}
        </Typography>

        <Typography variant="h6" component="div" sx={{ textAlign: "right", marginTop: "10px" }}>
          Balance
        </Typography>
        <Typography variant="h4" component="div" sx={{ textAlign: "right" }}>
          ${balance.toFixed(2)}
        </Typography>
      </CardContent>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="outlined"
          sx={{ flex: 1, marginRight: 3, padding: "5px", fontSize: "0.8rem", minWidth: "auto" }}
          startIcon={<HistoryIcon />}
        >
          History
        </Button>
        <Button
          variant="contained"
          sx={{ flex: 1, padding: "5px", fontSize: "0.8rem", minWidth: "auto" }}
          startIcon={<TransferIcon />}
        >
          Transfer
        </Button>
      </div>
    </Card>
  );
};

export default AccountWidget;
