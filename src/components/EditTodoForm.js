import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  Button,
  Checkbox,
  Container,
  TextField,
  Snackbar,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import { grey } from "@mui/material/colors";
import Home from "./home";
import { edittodo } from "../redux/edittodoreducer";

function EditTodo({ match }) {
  const location = useLocation();
  const { title, description, completed } = location.state.data;

  const [open, setOpen] = useState(false);
  const [titleField, setTitleField] = useState(title);
  const [descriptionField, setDescriptionField] = useState(description);
  const [completedField, setCompletedField] = useState(completed);

  const dispatch = useDispatch();

  const id = match.params.id;

  const onSubmit = (val) => {
    const a = {
      id: id,
      title: titleField,
      description: descriptionField,
      completed: completedField,
    };
    dispatch(edittodo(a));
    val.preventDefault();
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      <Home />
      <Container style={{ backgroundColor: grey[100] }}>
        <br />
        <Link
          to={`/showtodo/${id}`}
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
        <form onSubmit={onSubmit}>
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            value={titleField}
            onChange={(e) => setTitleField(e.target.value)}
            required
            sx={{ mb: "10px" }}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            value={descriptionField}
            onChange={(e) => setDescriptionField(e.target.value)}
            multiline
            required
          />

          <br />
          <Checkbox
            type="checkbox"
            checked={completedField}
            onChange={(e) => setCompletedField(e.target.checked)}
          />
          <label htmlFor="completed">Completed</label>
          <br />
          <Button
            variant="contained"
            type="submit"
            value="submit"
            sx={{ borderRadius: "10px" }}
          >
            Update
          </Button>
        </form>
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          message="Todo updated"
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          action={action}
        />
      </Container>
    </>
  );
}

export default EditTodo;
