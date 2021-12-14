import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { deletetodo } from "../redux/deletereducer";
import { fetchdata } from "../redux/showallreducer";

function ButtonComponent({ data }) {
  const [refresh, setRefresh] = useState(false);

  const dispatch = useDispatch();

  const history = useHistory();

  const { id } = data;

  useEffect(() => {
    if (refresh) {
      dispatch(fetchdata());
      setRefresh(false);
    }
  }, [dispatch, refresh]);

  const handleDelete = (id) => {
    dispatch(deletetodo(id));
    setRefresh(true);
  };

  return (
    <Container>
      <Link
        to="/showtodo"
        style={{
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        <Button
          color="error"
          variant="contained"
          startIcon={<DeleteIcon />}
          sx={{ width: "100px" }}
          onClick={() => handleDelete(id)}
        >
          Delete
        </Button>
      </Link>
      <span style={{ paddingLeft: "2px", paddingRight: "2px" }} />
      <Button
        color="success"
        variant="contained"
        startIcon={<EditIcon />}
        sx={{ width: "100px" }}
        onClick={() =>
          history.push({
            pathname: `/edittodo/${id}`,
            state: { data },
          })
        }
      >
        Edit
      </Button>
    </Container>
  );
}

export default ButtonComponent;
