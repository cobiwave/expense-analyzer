import { Container, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useState } from "react";

const ExpenseAnalyzer = () => {
  const [income, setIncome] = useState<number>(0);
  const [rent, setRent] = useState<number>(0);
  const [food, setFood] = useState<number>(0);
  const [extras, setExtras] = useState<number>(0);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    setter(parseFloat(event.target.value));
  };

  const totalExpenses: number = rent + food + extras;
  const remaining: number = income - totalExpenses;
  const emergencyFund: number = remaining * 0.2;
  const savings: number = remaining - emergencyFund;

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ fontWeight: 700 }}
      >
        💰 Expense Analyzer 💰
      </Typography>
      <TextField
        label="Monthly Income"
        type="number"
        value={income}
        onChange={(e) => handleInputChange(e, setIncome)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Rent"
        type="number"
        value={rent}
        onChange={(e) => handleInputChange(e, setRent)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Food"
        type="number"
        value={food}
        onChange={(e) => handleInputChange(e, setFood)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Extra Expenses"
        type="number"
        value={extras}
        onChange={(e) => handleInputChange(e, setExtras)}
        fullWidth
        margin="normal"
      />
      <Typography variant="h6" component="h2" gutterBottom>
        Emergency Fund: {emergencyFund.toFixed(2)}
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        Automatic Savings: {savings.toFixed(2)}
      </Typography>
    </Container>
  );
};

export default ExpenseAnalyzer;
