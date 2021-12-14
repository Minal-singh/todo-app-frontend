import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoDetail, tododetail } from "../redux/tododetailreducer";
import Button from "@mui/material/Button";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { grey } from "@mui/material/colors";
import ButtonComponent from "./ButtonComponent";

export default function TodoDetail({ match }) {
  const data = useSelector(getTodoDetail);

  const dispatch = useDispatch();

  const uid = match.params.id;

  useEffect(() => {
    dispatch(tododetail(uid));
  }, [dispatch, uid]);

  return (
    <Container
      sx={{ padding: "25px", backgroundColor: grey[200], height: "100vh" }}
    >
      <Link
        to="/showtodo"
        style={{
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        <Button
          color="secondary"
          variant="contained"
          startIcon={<ArrowBackIcon />}
          sx={{ marginBottom: "25px" }}
        >
          Go Back
        </Button>
      </Link>

      <Card>
        <CardHeader title={data.title} />
        <CardContent>
          <Typography
            component="h3"
            sx={{ textDecoration: data.completed ? "line-through" : "" }}
          >
            {data.description}
          </Typography>
        </CardContent>
        <CardActions>
          <ButtonComponent data={data} />
        </CardActions>
      </Card>
    </Container>
  );
}
