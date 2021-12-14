import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "@mui/material";

export default function Home() {
  return (
    <Container sx={{ mb: "30px", mt: "20px" }}>
      <Button
        sx={{
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          fontWeight: "bold",
          fontSize: "18px",
          border: 0,
          borderRadius: 3,
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
          color: "white",
          height: 48,
          padding: "0 30px",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
      </Button>
      <Button
        variant="contained"
        sx={{
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          fontWeight: "bold",
          fontSize: "18px",
          border: 0,
          borderRadius: 3,
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
          color: "white",
          height: 48,
          padding: "0 30px",
          ml: "10px",
          mr: "10px",
        }}
      >
        <Link to="/showtodo" style={{ textDecoration: "none" }}>
          Show all Todos
        </Link>
      </Button>
      <Button
        variant="contained"
        sx={{
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          fontWeight: "bold",
          fontSize: "18px",
          border: 0,
          borderRadius: 3,
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
          color: "white",
          height: 48,
          padding: "0 30px",
        }}
      >
        <Link to="addtodo" style={{ textDecoration: "none" }}>
          Add Todo
        </Link>
      </Button>
    </Container>
  );
}
